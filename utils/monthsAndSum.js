let monthsAndSum = (revenueResult) => {

    let monthlyRevenue = {};
    for (let result of revenueResult) {
        let monthYear = result.data_cadastro.toISOString().slice(0, 7);
        if (monthlyRevenue[monthYear]) {
            monthlyRevenue[monthYear] += Number(result._sum.valor);
        } else {
            monthlyRevenue[monthYear] = Number(result._sum.valor);
        }
    }
    return monthlyRevenue;

}

module.exports = { monthsAndSum };