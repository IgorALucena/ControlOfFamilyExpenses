let parseDate = (date) => {
   let typeDate = new Date(date);
   typeDate.setHours(23, 59, 59, 999);
   return typeDate;
}

module.exports = { parseDate };