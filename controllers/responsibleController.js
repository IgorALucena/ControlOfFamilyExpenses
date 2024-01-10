const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

let searchResponsibleController = async (req, res) => {
    try {
        let id = req.params.id;
        if (!id) {
            let result = await prisma.responsavel.findMany({
                include: {
                    gastos: true,
                    receita: true
                }
            });
            return res.status(200).json({
                msg: "all those responsible.",
                data: result
            });
        }
        else {
            id = parseInt(id);
            let result = await prisma.responsavel.findUnique({
                include: {
                    gastos: true,
                    receita: true
                },
                where: {
                    id: id
                }
            });
            if (!result) {
                return res.status(404).json({ msg: "no responsible found" });
            }
            else {
                return res.status(200).json({
                    status: `data of the person responsible for ${id} found.`,
                    data: result
                });
            }
        }

    }
    catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }

};

let registerResponsible = async (req, res) => {
    try {
        let { data_cadastro } = req.body;
        let result = await prisma.responsavel.create({
            data: {
                data_cadastro
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

let deleteResponsible = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let result = await prisma.responsavel.delete({
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

let editResponsible = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let { data_cadastro } = req.body;
        let result = await prisma.responsavel.update({
            data: {
                data_cadastro
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

module.exports = { searchResponsibleController, registerResponsible, deleteResponsible, editResponsible };