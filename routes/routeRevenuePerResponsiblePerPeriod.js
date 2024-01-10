const express = require('express');
const routerRevenuePerResponsiblePerPeriod = express.Router();
const { searchRevenuePerResponsiblePerPeriod } = require('../controllers/revenuePerResponsiblePerPeriodController');

routerRevenuePerResponsiblePerPeriod.get('/:id', searchRevenuePerResponsiblePerPeriod
    // #swagger.name = 'searchRevenuePerResponsiblePerPeriod'
    // #swagger.description = 'Designated route for collection of revenues by responsible person grouped by period.'
    //#swagger.tags = ['Revenues by responsible']
);

module.exports = { routerRevenuePerResponsiblePerPeriod };