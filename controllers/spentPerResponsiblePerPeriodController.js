const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const searchSpentPerResponsiblePerPeriod = async (req, res) => { // initialMonth=2023-12-26&finalMonth=2023-12-26
    try {
        let id = parseInt(req.params.id);
        let initialMonth = req.query.initialMonth;
        let finalMonth = req.query.finalMonth;
        initialMonth = new Date(initialMonth);
        initialMonth.setHours(0, 0, 0, 0);

        if (!finalMonth) {
            let spentResult = await prisma.gastos.findMany({
                select: {
                    valor: true
                },
                where: {
                    data_cadastro: { gte: initialMonth.toISOString() },
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
                monthReported: initialMonth,
                currentData: currentData,
                spentPerPeriod: valueSumSpent
            });
        }
        else {

            finalMonth = new Date(req.query.finalMonth);
            finalMonth.setHours(0, 0, 0, 0);

            let spentResult = await prisma.gastos.findMany({
                select: {
                    valor: true
                },
                where: {
                    AND: [
                        { data_cadastro: { gte: initialMonth.toISOString() } },
                        { data_cadastro: { lte: finalMonth.toISOString() } }
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
                monthReported: initialMonth,
                finalMonthReported: finalMonth,
                spentPerPeriod: valueSumSpent
            });
        }
    } catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
}


module.exports = { searchSpentPerResponsiblePerPeriod };