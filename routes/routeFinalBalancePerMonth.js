const express = require('express');
const routerFinalBalancePerMonth = express.Router();
const { searchFinalBalancePMonthController } = require('../controllers/finalBalancePerMonthController');

routerFinalBalancePerMonth.get('/', searchFinalBalancePMonthController
    // #swagger.name = 'searchFinalBalancePerMonth'
    // #swagger.description = 'Designated route to fetch ending balance grouped by months.'
    //#swagger.tags = ['Balance']
);

module.exports = { routerFinalBalancePerMonth };