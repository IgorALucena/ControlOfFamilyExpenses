const express = require('express');
const routerRevenue = express.Router();
const { searchRevenueController } = require('../controllers/revenueController');

routerRevenue.get('/period/:period', searchRevenueController)

module.exports = { routerRevenue };