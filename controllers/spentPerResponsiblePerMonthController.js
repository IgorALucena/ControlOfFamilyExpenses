const { PrismaClient } = require('@prisma/client');
const { parseDate } = require('../utils/parseDate');
const { monthsAndSum } = require('../utils/monthsAndSum');
const { objBuild } = require('../utils/objBuild');
const prisma = new PrismaClient();

const searchSpentPerResponsiblePerMonth = async (req, res) => {
    try {

        let id = parseInt(req.params.id);
        let initialMonth = parseDate(req.query.initialMonth);
        let finalMonth = req.query.finalMonth;

        if (!finalMonth) {
            let spentResult = await prisma.gastos.findMany({
                select: {
                    valor: true,
                    data_cadastro: true
                },
                where: {
                    data_cadastro: { gte: initialMonth.toISOString() },
                    id_responsavel: id
                }
            })

            let monthAndSum = monthsAndSum(spentResult);

            let objCreated = objBuild(monthAndSum);

            return res.status(200).json({
                status: "data found",
                spents: objCreated
            });
        }
        else {

            finalMonth = parseDate(finalMonth);

            let spentResult = await prisma.gastos.findMany({
                select: {
                    valor: true,
                    data_cadastro: true
                },
                where: {
                    AND: [
                        { data_cadastro: { gte: initialMonth.toISOString() } },
                        { data_cadastro: { lte: finalMonth.toISOString() } }
                    ],
                    id_responsavel: id
                }
            })
            let monthAndSum = monthsAndSum(spentResult);

            let objCreated = objBuild(monthAndSum);

            return res.status(200).json({
                status: "data found",
                spents: objCreated
            });
        }
    } catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
};


module.exports = { searchSpentPerResponsiblePerMonth };