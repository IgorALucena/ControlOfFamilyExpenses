const { PrismaClient } = require('@prisma/client');
const { parseDate } = require('../utils/parseDate');
const { sumSpentOrRevenue } = require('../utils/sumSpentOrRevenue');
const prisma = new PrismaClient();

const searchFinalBalancePPeriodController = async (req, res) => { // initialPeriod=2023-12-26&finalPeriod=2023-12-26
    try {
        let initialPeriod = parseDate(req.query.initialPeriod);
        let finalPeriod = req.query.finalPeriod;

        if (!finalPeriod) {
            let spentResult = await prisma.gastos.findMany({
                select: {
                    valor: true
                },
                where: {
                    data_cadastro: { gte: initialPeriod.toISOString() }
                }
            })

            let valueSumSpent = sumSpentOrRevenue(spentResult);
           
            let revenueResult = await prisma.receita.findMany({
                select: {
                    valor: true
                },
                where: {
                    data_cadastro: { gte: initialPeriod.toISOString() }
                }
            })

            let valueSumRevenue = sumSpentOrRevenue(revenueResult);

            let whatWasLeft = valueSumRevenue - valueSumSpent;
            let currentData = new Date();
            return res.status(200).json({
                status: "data found",
                monthReported: initialPeriod,
                currentData: currentData,
                finalBalance: whatWasLeft
            });
        }
        else {

            finalPeriod = parseDate(finalPeriod)

            let spentResult = await prisma.gastos.findMany({
                select: {
                    valor: true
                },
                where: {
                    AND: [
                        { data_cadastro: { gte: initialPeriod.toISOString() } },
                        { data_cadastro: { lte: finalPeriod.toISOString() } }
                    ]
                }
            })
            let valueSumSpent = sumSpentOrRevenue(spentResult);

            let revenueResult = await prisma.receita.findMany({
                select: {
                    valor: true
                },
                where: {
                    AND: [
                        { data_cadastro: { gte: initialPeriod.toISOString() } },
                        { data_cadastro: { lte: finalPeriod.toISOString() } }
                    ]
                }
            })
            let valueSumRevenue = sumSpentOrRevenue(revenueResult);
            
            let whatWasLeft = Math.abs(valueSumSpent - valueSumRevenue);
            return res.status(200).json({
                status: "data found",
                monthReported: initialPeriod,
                finalPeriodReported: finalPeriod,
                finalBalance: whatWasLeft
            });
        }
    } catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
}


module.exports = { searchFinalBalancePPeriodController };