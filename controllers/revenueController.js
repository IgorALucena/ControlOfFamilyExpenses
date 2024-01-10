const { PrismaClient } = require('@prisma/client');
const { parseDate } = require('../utils/parseDate');
const prisma = new PrismaClient();

let searchRevenueController = async (req, res) => {
    try {
        let date = parseDate(req.params.period);
        let nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 1);
        let result = await prisma.receita.findMany({
            select: {
                data_cadastro: true,
                valor: true
            },
            where: {
                AND: [
                    { data_cadastro: { gte: date.toISOString() } },
                    { data_cadastro: { lt: nextDay.toISOString() } },

                ]
            }
        });
        if (result.length === 0) {
            return res.status(404).json({ status: "No revenues found for the period reported." });
        }
        else {
            console.log(result);
            return res.status(200).json({
                status: "data found.",
                data: result
            });
        }
    }
    catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }

};

let registerRevenue = async (req, res) => {
    try {
        let { id_tipo_receita, id_responsavel, data_cadastro, observacao, valor } = req.body;
        let date = new Date(data_cadastro);
        let result = await prisma.receita.create({
            data: {
                id_tipo_receita: id_tipo_receita,
                id_responsavel: id_responsavel,
                data_cadastro: date,
                observacao: observacao,
                valor: valor
            }
        })
        res.status(200).json({
            status: 'successfully registered',
            data: result
        });
    }
    catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
};

let deleteRevenue = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let result = await prisma.receita.delete({
            where: {
                id: id
            }
        })
        res.status(200).json({
            status: 'successfully deleted',
            data: result
        });

    }
    catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
};

let editRevenue = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let { id_tipo_receita, id_responsavel, data_cadastro, observacao, valor } = req.body;
        let date = new Date(data_cadastro);
        let result = await prisma.receita.update({
            data: {
                ...(data_cadastro ? { data_cadastro: date } : {}),
                ...(id_tipo_receita ? { id_tipo_receita } : {}),
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
        });

    }
    catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
};

module.exports = { searchRevenueController, registerRevenue, editRevenue, deleteRevenue };