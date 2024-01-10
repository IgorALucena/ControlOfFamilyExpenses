const express = require('express');
const routerSpentPerResponsiblPerPeriod = express.Router();
const { searchSpentPerResponsiblePerPeriod } = require('../controllers/spentPerResponsiblePerPeriodController');

routerSpentPerResponsiblPerPeriod.get('/:id', searchSpentPerResponsiblePerPeriod
    // #swagger.name = 'searchSpentPerResponsiblePerPeriod'
    // #swagger.description = 'Designated route for collection of spent by responsible person grouped by Period.'
    //#swagger.tags = ['Spent by responsible']
);

module.exports = { routerSpentPerResponsiblPerPeriod };