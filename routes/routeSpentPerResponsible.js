const express = require('express');
const routerSpentPerResponsiblPerPeriod = express.Router();
const { searchSpentPerResponsiblePerPeriod } = require('../controllers/spentPerResponsiblePerPeriodController');

routerSpentPerResponsiblPerPeriod.get('/:id', searchSpentPerResponsiblePerPeriod);

module.exports = { routerSpentPerResponsiblPerPeriod };