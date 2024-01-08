const express = require('express');
const routerRevenuePerResponsiblePerPeriod = express.Router();
const { searchRevenuePerResponsiblePerPeriod } = require('../controllers/revenuePerResponsiblePerPeriod');

routerRevenuePerResponsiblePerPeriod.get('/:id', searchRevenuePerResponsiblePerPeriod);

module.exports = { routerRevenuePerResponsiblePerPeriod };