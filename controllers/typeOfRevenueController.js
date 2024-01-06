const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

let searchTypeOfRevenue = async (req, res) => {
    try {
        let revenue = req.params.typeOfRevenue;
        if (!revenue) {
            let result = await prisma.tipo_receita.findMany({
                select: {
                    nome: true,
                    receita: {
                        select: {
                            id_responsavel: true,
                            data_cadastro: true,
                            valor: true
                        }
                    }
                }
            });
            return res.status(200).json({
                msg: "all those types of revenues.",
                data: result
            });
        }
        else {
            let result = await prisma.tipo_receita.findMany({
                where: {
                    nome: {
                        contains: revenue
                    }
                },
                select: {
                    nome: true,
                    receita: {
                        select: {
                            id_responsavel: true,
                            data_cadastro: true,
                            valor: true
                        }
                    }
                }
            })
            return res.status(200).json({
                status: `data of type of revenues ${establishment} found.`,
                data: result
            });
        }
    }
    catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }

}

let registerTypeOfRevenue = async (req, res) => {
    try {
        let { nome } = req.body;
        let result = await prisma.tipo_receita.create({
            data: {
                nome
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

let deleteTypeOfRevenue = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let result = await prisma.tipo_receita.delete({
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

let editTypeOfRevenue = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let { nome } = req.body;
        let result = await prisma.tipo_receita.update({
            data: {
                nome
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

module.exports = { searchTypeOfRevenue, registerTypeOfRevenue, deleteTypeOfRevenue, editTypeOfRevenue }
