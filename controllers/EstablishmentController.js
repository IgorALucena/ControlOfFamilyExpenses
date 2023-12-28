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

module.exports = { searchEstablishmentController };