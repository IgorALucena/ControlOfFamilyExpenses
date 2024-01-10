const express = require('express');
const routerFinalBalancePerPeriod = express.Router();
const { searchFinalBalancePPeriodController } = require('../controllers/finalBalancePerPeriodController');

routerFinalBalancePerPeriod.get('/', searchFinalBalancePPeriodController
    // #swagger.name = 'searchFinalBalancePerPeriod'
    // #swagger.description = 'Designated route to fetch ending balance grouped by period.'
    //#swagger.tags = ['Balance']
);

module.exports = { routerFinalBalancePerPeriod };