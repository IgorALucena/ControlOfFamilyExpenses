const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

let typeOfExpenseController = async (req, res) => {
    try {
        let type = req.params.type;
        if (!type) {
            let result = await prisma.tipo_gasto.findMany({
                select: {
                    nome: true,
                    gastos: {
                        select: {
                            valor: true
                        }
                    }
                }

            });
            return res.status(200).json({
                msg: "all those type of expense.",
                data: result
            });
        }
        else {
            let result = await prisma.tipo_gasto.findMany({
                where: {
                    nome: {
                        contains: type,
                        mode: 'insensitive'
                    }
                },
                select: {
                    nome: true,
                    gastos: {
                        select: {
                            valor: true
                        }
                    }
                }

            });
            if (result.length === 0) {
                return res.status(404).json({ msg: "no type of expense found" });
            }
            else {
                return res.status(200).json({
                    status: `data on types ${type} of expenses found`,
                    data: result
                });
            }
        }


    } catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }

}

module.exports = { typeOfExpenseController };