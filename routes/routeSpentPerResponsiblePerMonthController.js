const express = require('express');
const routerSpentPerResponsiblePerMonth = express.Router();
const { searchSpentPerResponsiblePerMonth } = require('../controllers/spentPerResponsiblePerMonthController')

routerSpentPerResponsiblePerMonth.get('/:id', searchSpentPerResponsiblePerMonth
    // #swagger.name = 'searchSpentPerResponsiblePerMonth'
    // #swagger.description = 'Designated route for collection of spent by responsible person grouped by months.'
    //#swagger.tags = ['Spent by responsible']
);

module.exports = { routerSpentPerResponsiblePerMonth };