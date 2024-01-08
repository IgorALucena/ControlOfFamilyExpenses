const express = require('express');
const routerFinalBalancePerMonth = express.Router();
const { searchFinalBalancePMonthController } = require('../controllers/finalBalancePerMonthController');

routerFinalBalancePerMonth.get('/', searchFinalBalancePMonthController);

module.exports = { routerFinalBalancePerMonth };