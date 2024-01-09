const { PrismaClient } = require('@prisma/client');
const { parseDate } = require('../utils/parseDate');
const { monthsAndSum } = require('../utils/monthsAndSum');
const { monthsAndSub } = require('../utils/monthsAndSub');
const { objBuild } = require('../utils/objBuild');
const prisma = new PrismaClient();


const searchFinalBalancePMonthController = async (req, res) => { // preciso fazer a lógica aqui ainda. Isso é só a cópia de outro controller que já fiz.
    try {

        let initialMonth = parseDate(req.query.initialMonth);
        let finalMonth = req.query.finalMonth;

        if (!finalMonth) {
            let revenueResult = await prisma.receita.findMany({
                select: {
                    valor: true,
                    data_cadastro: true
                },
                where: {
                    data_cadastro: { gte: initialMonth.toISOString() }
                }
            })

            let spentResult = await prisma.gastos.findMany({
                select: {
                    valor: true,
                    data_cadastro: true
                },
                where: {
                    data_cadastro: { gte: initialMonth.toISOString() }
                }
            });

            let monthAndSum = monthsAndSum(revenueResult);

            let monthAndSub = monthsAndSub(spentResult, monthAndSum);

            let objCreated = objBuild(monthAndSub);

            return res.status(200).json({
                status: "data found",
                Balance: objCreated
            });

        }
        else {
            finalMonth = parseDate(finalMonth)
            let revenueResult = await prisma.receita.findMany({
                select: {
                    valor: true,
                    data_cadastro: true
                },
                where: {
                    AND: [
                        { data_cadastro: { gte: initialMonth.toISOString() } },
                        { data_cadastro: { lte: finalMonth.toISOString() } }
                    ]
                }
            })

            let spentResult = await prisma.gastos.findMany({
                select: {
                    valor: true,
                    data_cadastro: true
                },
                where: {
                    AND: [
                        { data_cadastro: { gte: initialMonth.toISOString() } },
                        { data_cadastro: { lte: finalMonth.toISOString() } }
                    ]
                }
            });

            let monthAndSum = monthsAndSum(revenueResult);

            let monthAndSub = monthsAndSub(spentResult, monthAndSum);

            let objCreated = objBuild(monthAndSub);

            return res.status(200).json({
                status: "data found",
                Balance: objCreated
            })
        }

    } catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
}


module.exports = { searchFinalBalancePMonthController };