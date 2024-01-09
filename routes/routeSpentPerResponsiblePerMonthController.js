const express = require('express');
const routerSpentPerResponsiblePerMonth = express.Router();
const { searchSpentPerResponsiblePerMonth } = require('../controllers/spentPerResponsiblePerMonthController')

routerSpentPerResponsiblePerMonth.get('/:id', searchSpentPerResponsiblePerMonth);

module.exports = { routerSpentPerResponsiblePerMonth };