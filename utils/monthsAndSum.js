let monthsAndSum = (revenueResult, ) =>{

    let arrayObj = [
        { mes: "January", soma: 0 },
        { mes: "February", soma: 0 },
        { mes: "March", soma: 0 },
        { mes: "April", soma: 0 },
        { mes: "May", soma: 0 },
        { mes: "June", soma: 0 },
        { mes: "July", soma: 0 },
        { mes: "August", soma: 0 },
        { mes: "September", soma: 0 },
        { mes: "October", soma: 0 },
        { mes: "November", soma: 0 },
        { mes: "December", soma: 0 },
    ]

    for (let index = 0; index < revenueResult.length; index++) {
        let data = new Date(revenueResult[index].data_cadastro);
        let month = data.getMonth();
        arrayObj[month].soma += Number(revenueResult[index].valor);
    }

    return arrayObj;

}

module.exports = {monthsAndSum};