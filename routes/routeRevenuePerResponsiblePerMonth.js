const express = require('express');
const routerRevenuePerResponsiblePerMonth = express.Router();
const { searchRevenuePerResponsiblePerMonthController } = require('../controllers/revenuePerResponsiblePerMonthController');

routerRevenuePerResponsiblePerMonth.get('/:id', searchRevenuePerResponsiblePerMonthController);

module.exports = { routerRevenuePerResponsiblePerMonth };