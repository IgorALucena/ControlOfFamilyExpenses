const express = require('express');
const routerRevenue = express.Router();
const { searchRevenueController, registerRevenue, editRevenue, deleteRevenue } = require('../controllers/revenueController');

routerRevenue.get('/period/:period', searchRevenueController);

routerRevenue.post('/register', registerRevenue);

routerRevenue.delete('/delete/:id', deleteRevenue);

routerRevenue.put('/edit/:id', editRevenue);

module.exports = { routerRevenue };