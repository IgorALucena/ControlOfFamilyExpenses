const express = require('express');
const routerRevenuePerResponsiblePerPeriod = express.Router();
const { searchRevenuePerResponsiblePerPeriod } = require('../controllers/revenuePerResponsiblePerPeriodController');

routerRevenuePerResponsiblePerPeriod.get('/:id', searchRevenuePerResponsiblePerPeriod);

module.exports = { routerRevenuePerResponsiblePerPeriod };