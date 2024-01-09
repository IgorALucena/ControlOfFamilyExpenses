let objBuild = (arrayObj) => {
    let aux = [];
    for (let index = 0; index < arrayObj.length; index++) {
        if (arrayObj[index].soma !== 0) {
            aux.push({month: arrayObj[index].mes, rest: arrayObj[index].soma });
        }
    }
    return aux;
}

module.exports = { objBuild };