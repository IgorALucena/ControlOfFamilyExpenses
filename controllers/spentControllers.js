const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

let spentPerPeriodController = async (req, res) => {
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
        if (result.length === 0) {
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

let spentValueController = async (req, res) => {
    try {
        let valueParameter = req.params.value;
        let result = await prisma.gastos.findMany({
            select: {
                data_cadastro: true,
                observacao: true,
                valor: true
            },
            where: {
                valor: valueParameter
            }
        })
        console.log(result);
        if (result.length === 0) {
            return res.status(404).json({ status: "No expenses found for value reported." });
        }
        res.status(200).json({
            status: "data found.",
            data: result
        });

    }
    catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
}

let spentResponsibleController = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let result = await prisma.gastos.findMany({
            select: {
                data_cadastro: true,
                observacao: true,
                valor: true
            },
            where: {
                id_responsavel: id
            }
        })

        console.log(result);
        if (result.length === 0) {
            return res.status(404).json({ status: "No expenses found for responsible reported." });
        }
        res.status(200).json({
            status: "data found.",
            data: result
        });

    } catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
}

let registerSpent = async (req, res) => {
    try {
        let { data_cadastro, id_responsavel, id_tipo_gasto, id_estabelecimento, observacao, valor } = req.body;
        let date = new Date(data_cadastro);
        let result = await prisma.gastos.create({
            data: {
                data_cadastro: date,
                id_responsavel: id_responsavel,
                id_tipo_gasto: id_tipo_gasto,
                id_estabelecimento: id_estabelecimento,
                observacao: observacao,
                valor: valor
            }
        })
        res.status(200).json({
            status: 'successfully registered',
            data: result
        })
    }
    catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
}

let deleteSpent = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let result = await prisma.gastos.delete({
            where: {
                id: id
            }
        })
        res.status(200).json({
            status: 'successfully deleted',
            data: result
        })

    }
    catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
}

let editSpent = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let { data_cadastro, id_tipo_gasto, id_estabelecimento, observacao, valor, id_responsavel } = req.body;
        let result = await prisma.gastos.update({
            data: {
                ...(data_cadastro ? { data_cadastro } : {}),
                ...(id_tipo_gasto ? { id_tipo_gasto } : {}),
                ...(id_estabelecimento ? { id_estabelecimento } : {}),
                ...(observacao ? { observacao } : {}),
                ...(valor ? { valor } : {}),
                ...(id_responsavel ? { id_responsavel } : {})
            },
            where: {
                id: id
            }
        })
        res.status(200).json({
            status: 'successfully updated',
            data: result
        })

    }
    catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
}


module.exports = { spentPerPeriodController, spentValueController, spentResponsibleController, registerSpent, deleteSpent, editSpent };