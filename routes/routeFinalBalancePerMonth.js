const express = require('express');
const routerFinalBalancePerMonth = express.Router();
const { searchFinalBalancePMonthController } = require('../controllers/FinalBalancePerMonthController');

routerFinalBalancePerMonth.get('/', searchFinalBalancePMonthController);

module.exports = { routerFinalBalancePerMonth };