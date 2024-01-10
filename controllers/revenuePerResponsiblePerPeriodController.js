const { PrismaClient } = require('@prisma/client');
const { parseDate } = require('../utils/parseDate');
const { sumSpentOrRevenue } = require('../utils/sumSpentOrRevenue');
const prisma = new PrismaClient();

const searchRevenuePerResponsiblePerPeriod = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let initialPeriod = parseDate(req.query.initialPeriod);
        let finalPeriod = req.query.finalPeriod;

        if (!finalPeriod) {
            let revenueResult = await prisma.receita.findMany({
                select: {
                    valor: true
                },
                where: {
                    data_cadastro: { gte: initialPeriod.toISOString() },
                    id_responsavel: id
                }
            });

            let valueSumRevenue =  sumSpentOrRevenue(revenueResult);

            let currentData = new Date();
            return res.status(200).json({
                status: "data found",
                monthReported: initialPeriod,
                currentData: currentData,
                revenuePerPeriod: valueSumRevenue
            });
        }
        else {

            finalPeriod = parseDate(finalPeriod);

            let revenueResult = await prisma.receita.findMany({
                select: {
                    valor: true
                },
                where: {
                    AND: [
                        { data_cadastro: { gte: initialPeriod.toISOString() } },
                        { data_cadastro: { lte: finalPeriod.toISOString() } }
                    ],
                    id_responsavel:id
                }
            });

            let valueSumRevenue =  sumSpentOrRevenue(revenueResult);

            return res.status(200).json({
                status: "data found",
                monthReported: initialPeriod,
                finalPeriodReported: finalPeriod,
                revenuePerPeriod: valueSumRevenue
            });
        }
    } catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    };
};


module.exports = { searchRevenuePerResponsiblePerPeriod };