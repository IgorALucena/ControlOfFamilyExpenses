const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

let spentPerPeriod = async (req, res) => {
    try {
        let date = new Date(req.params.period);
        date.setHours(0, 0, 0, 0);
        let nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 1);

        let result = await prisma.gastos.findMany({
            select: {
                data_cadastro: true,
                observacao: true,
                valor: true
            },
            where: {
                AND: [
                    { data_cadastro: { gte: date.toISOString() } },
                    { data_cadastro: { lt: nextDay.toISOString() } }
                ]
            }

        });
        console.log(result);
        if (!result) {
            return res.status(404).json({ status: "No expenses found for the period reported." });
        }
        else {
            console.log(result);
            return res.status(200).json({
                status: "data found.",
                data: result
            })


        }

    }
    catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
}

module.exports = { spentPerPeriod };