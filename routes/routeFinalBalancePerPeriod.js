const express = require('express');
const routerFinalBalancePerPeriod = express.Router();
const { searchFinalBalancePPeriodController } = require('../controllers/FinalBalancePerPeriodController');

routerFinalBalancePerPeriod.get('/', searchFinalBalancePPeriodController);

module.exports = { routerFinalBalancePerPeriod };