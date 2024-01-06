const express = require('express');
const routerTypeOfRevenue = express.Router();
const { searchTypeOfRevenue, registerTypeOfRevenue, deleteTypeOfRevenue, editTypeOfRevenue } = require('../controllers/typeOfRevenueController');

routerTypeOfRevenue.get('/:typeOfRevenue?', searchTypeOfRevenue);

routerTypeOfRevenue.post('/register', registerTypeOfRevenue);

routerTypeOfRevenue.delete('/delete/:id', deleteTypeOfRevenue);

routerTypeOfRevenue.put('/edit/:id', editTypeOfRevenue);

module.exports = { routerTypeOfRevenue };