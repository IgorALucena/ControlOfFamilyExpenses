const express = require('express');
const routerFinalBalancePerPeriod = express.Router();
const { searchFinalBalancePPeriodController } = require('../controllers/finalBalancePerPeriodController');

routerFinalBalancePerPeriod.get('/', searchFinalBalancePPeriodController);

module.exports = { routerFinalBalancePerPeriod };