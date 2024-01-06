const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

let searchEstablishmentController = async (req, res) => {
    try {
        let establishment = req.params.nameEstablishment;
        if (!establishment) {
            let result = await prisma.estabelecimento.findMany({
                select: {
                    nome: true,
                    gastos: {
                        select: {
                            valor: true,
                            data_cadastro: true
                        }
                    }
                }
            });
            return res.status(200).json({
                msg: "all those establishment.",
                data: result
            });
        }
        else {
            let result = await prisma.estabelecimento.findMany({
                where: {
                    nome: {
                        contains: establishment
                    }
                },
                select: {
                    nome: true,
                    gastos: {
                        select: {
                            valor: true,
                            data_cadastro: true
                        }
                    }
                }
            })
            return res.status(200).json({
                status: `data of establishment ${establishment} found.`,
                data: result
            });
        }
    }
    catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }

}

let registerEstablishment = async (req, res) => {
    try {
        let { nome } = req.body;
        let result = await prisma.estabelecimento.create({
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

let deleteEstablishment = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let result = await prisma.estabelecimento.delete({
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

let editEstablishment = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let { nome } = req.body;
        let result = await prisma.estabelecimento.update({
            data: {
                nome: nome
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

module.exports = { searchEstablishmentController, registerEstablishment, deleteEstablishment, editEstablishment };