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

};

let registerTypeOfExpenseController = async (req, res) => {
    try {
        let { nome } = req.body;
        let result = await prisma.tipo_gasto.create({
            data: {
                nome: nome
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

let deleteTypeOfExpenseController = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let result = await prisma.tipo_gasto.delete({
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

let editTypeOfExpenseController = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let { nome } = req.body;
        let result = await prisma.tipo_gasto.update({
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
        });

    }
    catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
};

module.exports = { typeOfExpenseController, registerTypeOfExpenseController, deleteTypeOfExpenseController, editTypeOfExpenseController };