let sumSpentOrRevenue = (result) => {
    let sum = 0;
    for (let index = 0; index < result.length; index++) {
        sum += Number(result[index].valor);
    }
    console.log(sum);
    return sum;
    
}

module.exports = { sumSpentOrRevenue };