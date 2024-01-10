const express = require('express');
const routerRevenuePerResponsiblePerMonth = express.Router();
const { searchRevenuePerResponsiblePerMonthController } = require('../controllers/revenuePerResponsiblePerMonthController');

routerRevenuePerResponsiblePerMonth.get('/:id', searchRevenuePerResponsiblePerMonthController
    // #swagger.name = 'searchRevenuePerResponsiblePerMonth'
    // #swagger.description = 'Designated route for collection of revenues by responsible person grouped by months.'
    //#swagger.tags = ['Revenues by responsible']
);

module.exports = { routerRevenuePerResponsiblePerMonth };