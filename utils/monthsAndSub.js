let monthsAndSub = (spentResult, monthlyRevenue) => {

    for (let result of spentResult) {
        let monthYear = result.data_cadastro.toISOString().slice(0, 7);
        monthlyRevenue[monthYear] -= Number(result._sum.valor);
    }

    return monthlyRevenue;

}

module.exports = { monthsAndSub };