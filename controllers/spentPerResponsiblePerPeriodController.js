const { PrismaClient } = require('@prisma/client');
const { parseDate } = require('../utils/parseDate');
const { sumSpentOrRevenue } = require('../utils/sumSpentOrRevenue');
const prisma = new PrismaClient();

const searchSpentPerResponsiblePerPeriod = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let initialPeriod = parseDate(req.query.initialPeriod);
        let finalPeriod = req.query.finalPeriod;

        if (!finalPeriod) {
            let spentResult = await prisma.gastos.findMany({
                select: {
                    valor: true
                },
                where: {
                    data_cadastro: { gte: initialPeriod.toISOString() },
                    id_responsavel: id
                }
            });

            let valueSumSpent = sumSpentOrRevenue(spentResult);

            let currentData = new Date();
            return res.status(200).json({
                status: "data found",
                monthReported: initialPeriod,
                currentData: currentData,
                spentPerPeriod: valueSumSpent
            });
        }
        else {

            finalPeriod = parseDate(finalPeriod);

            let spentResult = await prisma.gastos.findMany({
                select: {
                    valor: true
                },
                where: {
                    AND: [
                        { data_cadastro: { gte: initialPeriod.toISOString() } },
                        { data_cadastro: { lte: finalPeriod.toISOString() } }
                    ],
                    id_responsavel: id
                }
            });

            let valueSumSpent = sumSpentOrRevenue(spentResult);

            return res.status(200).json({
                status: "data found",
                monthReported: initialPeriod,
                finalPeriodReported: finalPeriod,
                spentPerPeriod: valueSumSpent
            });
        }
    } catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
};


module.exports = { searchSpentPerResponsiblePerPeriod };