const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const searchFinalBalancePMonthController = async (req, res) => { // preciso fazer a lógica aqui ainda. Isso é só a cópia de outro controller que já fiz.
    try {
        let aux = [];
        let arrayObj = [
            { mes: "janeiro", soma: 0 },
            { mes: "fevereiro", soma: 0 },
            { mes: "março", soma: 0 },
            { mes: "abril", soma: 0 },
            { mes: "maio", soma: 0 },
            { mes: "junho", soma: 0 },
            { mes: "julho", soma: 0 },
            { mes: "agosto", soma: 0 },
            { mes: "setembro", soma: 0 },
            { mes: "outubro", soma: 0 },
            { mes: "novembro", soma: 0 },
            { mes: "dezembro", soma: 0 },
        ]
        
        let initialMonth = req.query.initialMonth;
        let finalMonth = req.query.finalMonth;
        initialMonth = new Date(initialMonth);
        initialMonth.setHours(23, 59, 59, 999);

        if(!finalMonth){
            let revenueResult = await prisma.receita.findMany({
                select: {
                    valor: true,
                    data_cadastro: true
                },
                where: {
                    data_cadastro: { gte: initialMonth.toISOString() }
                }
            })
    
            let spentResult = await prisma.gastos.findMany({
                select: {
                    valor: true,
                    data_cadastro: true
                },
                where: {
                    data_cadastro: { gte: initialMonth.toISOString() }
                }
            });
    
            //somando as receitas
    
            for (let index = 0; index < revenueResult.length; index++) {
                let data = new Date(revenueResult[index].data_cadastro);
                let month = data.getMonth();
                arrayObj[month].soma += Number(revenueResult[index].valor);
            }
    
            //subtraindo os gastos
            for (let index = 0; index < spentResult.length; index++) {
                let data = new Date(spentResult[index].data_cadastro);
                let month = data.getMonth();
                arrayObj[month].soma -= Number(spentResult[index].valor);
            }
    
            //organizando a string a ser impressa
            for (let index = 0; index < arrayObj.length; index++) {
                if (arrayObj[index].soma !== 0) {
                    aux[index] = `Mês: ${arrayObj[index].mes} | O que sobrou: ${arrayObj[index].soma}`
                }
            }
            console.log(spentResult.length);
            console.log(revenueResult.length);
            return res.status(200).json({
                status: "data found",
                Balance: aux.join('')
            });

        }
        else{
            finalMonth = new Date(req.query.finalMonth);
            finalMonth.setHours(23, 59, 59, 999);
            let revenueResult = await prisma.receita.findMany({
                select: {
                    valor: true,
                    data_cadastro: true
                },
                where: {
                    AND: [
                        { data_cadastro: { gte: initialMonth.toISOString() } },
                        { data_cadastro: { lte: finalMonth.toISOString() } }
                    ]
                }
            })
    
            let spentResult = await prisma.gastos.findMany({
                select: {
                    valor: true,
                    data_cadastro: true
                },
                where: {
                    AND: [
                        { data_cadastro: { gte: initialMonth.toISOString() } },
                        { data_cadastro: { lte: finalMonth.toISOString() } }
                    ]
                }
            });
    
            //somando as receitas
    
            for (let index = 0; index < revenueResult.length; index++) {
                let data = new Date(revenueResult[index].data_cadastro);
                let month = data.getMonth();
                arrayObj[month].soma += Number(revenueResult[index].valor);
            }
    
            //subtraindo os gastos
            for (let index = 0; index < spentResult.length; index++) {
                let data = new Date(spentResult[index].data_cadastro);
                let month = data.getMonth();
                arrayObj[month].soma -= Number(spentResult[index].valor);
            }
    
            //organizando a string a ser impressa
            for (let index = 0; index < arrayObj.length; index++) {
                if (arrayObj[index].soma !== 0) {
                    aux[index] = `Mês: ${arrayObj[index].mes} | O que sobrou: ${arrayObj[index].soma}`
                }
            }
            console.log(spentResult.length);
            console.log(revenueResult.length);
            return res.status(200).json({
                status: "data found",
                Balance: aux.join('')
            })
        }

        

    } catch (err) {
        res.status(404).json({ msg: `Error: ${err}` });
    }
}


module.exports = { searchFinalBalancePMonthController };