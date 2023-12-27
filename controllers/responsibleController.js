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
            })
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
            })
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

}

module.exports = { searchResponsibleController };