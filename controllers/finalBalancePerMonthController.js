const { PrismaClient } = require('@prisma/client');
const { parseDate } = require('../utils/parseDate');
const { monthsAndSum } = require('../utils/monthsAndSum');
const { monthsAndSub } = require('../utils/monthsAndSub');
const { objBuild } = require('../utils/objBuild');
const prisma = new PrismaClient();


const searchFinalBalancePMonthController = async (req, res) => {
    try {

        let initialMonth = parseDate(req.query.initialMonth);
        let finalMonth = req.query.finalMonth;

        if (!finalMonth) {

            let revenueResult = await prisma.receita.groupBy({
                by: ['data_cadastro'],
                _sum: {
                    valor: true
                },
                where: {
                    data_cadastro: { gte: initialMonth }
                }
            });

            let sumRevenue = monthsAndSum(revenueResult);

            let spentResult = await prisma.gastos.groupBy({
                by: ['data_cadastro'],
                _sum: {
                    valor: true
                },
                where: {
                    data_cadastro: { gte: initialMonth }
                }
            });

            let finalBalancePerMonth = monthsAndSub(spentResult, sumRevenue);

            return res.status(200).json({
                status: "data found",
                Balance: finalBalancePerMonth
            });

        }
        else {
            finalMonth = parseDate(finalMonth);
            let revenueResult = await prisma.receita.groupBy({
                by: ['data_cadastro'],
                _sum: {
                    valor: true
                },
                where: {
                    AND: [
                        { data_cadastro: { gte: initialMonth.toISOString() } },
                        { data_cadastro: { lte: finalMonth.toISOString() } }
                    ]
                }
            });

            let sumRevenue = monthsAndSum(revenueResult);

            let spentResult = await prisma.gastos.groupBy({
                by: ['data_cadastro'],
                _sum: {
                    valor: true
                },
                where: {
                    AND: [
                        { data_cadastro: { gte: initialMonth.toISOString() } },
                        { data_cadastro: { lte: finalMonth.toISOString() } }
                    ]
                }
            });

            let finalBalancePerMonth = monthsAndSub(spentResult, sumRevenue);

            return res.status(200).json({
                status: "data found",
                Balance: finalBalancePerMonth
            });
        }

    } catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
};


module.exports = { searchFinalBalancePMonthController };