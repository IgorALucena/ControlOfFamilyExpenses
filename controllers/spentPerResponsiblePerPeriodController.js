const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const searchSpentPerResponsiblePerPeriod = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let initialPeriod = req.query.initialPeriod;
        let finalPeriod = req.query.finalPeriod;
        initialPeriod = new Date(initialPeriod);
        initialPeriod.setHours(23, 59, 59, 999);

        if (!finalPeriod) {
            let spentResult = await prisma.gastos.findMany({
                select: {
                    valor: true
                },
                where: {
                    data_cadastro: { gte: initialPeriod.toISOString() },
                    id_responsavel:id
                }
            })
            let valueSumSpent = 0;
            for (let index = 0; index < spentResult.length; index++) {
                valueSumSpent += Number(spentResult[index].valor);
            }
            let currentData = new Date();
            return res.status(200).json({
                status: "data found",
                monthReported: initialPeriod,
                currentData: currentData,
                spentPerPeriod: valueSumSpent
            });
        }
        else {

            finalPeriod = new Date(req.query.finalPeriod);
            finalPeriod.setHours(23, 59, 59, 999);

            let spentResult = await prisma.gastos.findMany({
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
            let valueSumSpent = 0;
            for (let index = 0; index < spentResult.length; index++) {
                valueSumSpent += Number(spentResult[index].valor);
            }

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
}


module.exports = { searchSpentPerResponsiblePerPeriod };