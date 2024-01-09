let monthsAndSub = (spentResult, arrayObj) =>{

    for (let index = 0; index < spentResult.length; index++) {
        let data = new Date(spentResult[index].data_cadastro);
        let month = data.getMonth();
        arrayObj[month].soma -= Number(spentResult[index].valor);
    }

    return arrayObj;

}

module.exports = {monthsAndSub};