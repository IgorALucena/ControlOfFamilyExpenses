const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const searchFinalBalancePPeriodController = async (req, res) => { // initialMonth=2023-12-26&finalMonth=2023-12-26
    try {
        let initialMonth = req.query.initialMonth;
        let finalMonth = req.query.finalMonth;
        initialMonth = new Date(initialMonth);
        initialMonth.setHours(23, 59, 59, 999);

        if (!finalMonth) {
            let spentResult = await prisma.gastos.findMany({
                select: {
                    valor: true
                },
                where: {
                    data_cadastro: { gte: initialMonth.toISOString() }
                }
            })
            let valueSumSpent = 0;
            for (let index = 0; index < spentResult.length; index++) {
                valueSumSpent += Number(spentResult[index].valor);
            }
            let revenueResult = await prisma.receita.findMany({
                select: {
                    valor: true
                },
                where: {
                    data_cadastro: { gte: initialMonth.toISOString() }
                }
            })
            let valueSumRevenue = 0;
            for (let index = 0; index < revenueResult.length; index++) {
                valueSumRevenue += Number(revenueResult[index].valor);
            }

            let whatWasLeft = Math.abs(valueSumSpent - valueSumRevenue);
            let currentData = new Date();
            return res.status(200).json({
                status: "data found",
                monthReported: initialMonth,
                currentData: currentData,
                finalBalance: whatWasLeft
            });
        }
        else {

            finalMonth = new Date(req.query.finalMonth);
            finalMonth.setHours(23, 59, 59, 999);

            let spentResult = await prisma.gastos.findMany({
                select: {
                    valor: true
                },
                where: {
                    AND: [
                        { data_cadastro: { gte: initialMonth.toISOString() } },
                        { data_cadastro: { lte: finalMonth.toISOString() } }
                    ]
                }
            })
            let valueSumSpent = 0;
            for (let index = 0; index < spentResult.length; index++) {
                valueSumSpent += Number(spentResult[index].valor);
            }

            let revenueResult = await prisma.receita.findMany({
                select: {
                    valor: true
                },
                where: {
                    AND: [
                        { data_cadastro: { gte: initialMonth.toISOString() } },
                        { data_cadastro: { lte: finalMonth.toISOString() } }
                    ]
                }
            })
            let valueSumRevenue = 0;
            for (let index = 0; index < revenueResult.length; index++) {
                valueSumRevenue += Number(revenueResult[index].valor);
            }

            let whatWasLeft = Math.abs(valueSumSpent - valueSumRevenue);
            return res.status(200).json({
                status: "data found",
                monthReported: initialMonth,
                finalMonthReported: finalMonth,
                finalBalance: whatWasLeft
            });
        }
    } catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
}


module.exports = { searchFinalBalancePPeriodController };