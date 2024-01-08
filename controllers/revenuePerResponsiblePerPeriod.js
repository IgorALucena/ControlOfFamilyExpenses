const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const searchRevenuePerResponsiblePerPeriod = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let initialPeriod = req.query.initialPeriod;
        let finalPeriod = req.query.finalPeriod;
        initialPeriod = new Date(initialPeriod);
        initialPeriod.setHours(23, 59, 59, 999);

        if (!finalPeriod) {
            let revenueResult = await prisma.receita.findMany({
                select: {
                    valor: true
                },
                where: {
                    data_cadastro: { gte: initialPeriod.toISOString() },
                    id_responsavel: id
                }
            })
            let valueSumRevenue = 0;
            for (let index = 0; index < revenueResult.length; index++) {
                valueSumRevenue += Number(revenueResult[index].valor);
            }
            let currentData = new Date();
            return res.status(200).json({
                status: "data found",
                monthReported: initialPeriod,
                currentData: currentData,
                revenuePerPeriod: valueSumRevenue
            });
        }
        else {

            finalPeriod = new Date(req.query.finalPeriod);
            finalPeriod.setHours(23, 59, 59, 999);

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
            })
            let valueSumRevenue = 0;
            for (let index = 0; index < revenueResult.length; index++) {
                valueSumRevenue += Number(revenueResult[index].valor);
            }

            return res.status(200).json({
                status: "data found",
                monthReported: initialPeriod,
                finalPeriodReported: finalPeriod,
                revenuePerPeriod: valueSumRevenue
            });
        }
    } catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
}


module.exports = { searchRevenuePerResponsiblePerPeriod };