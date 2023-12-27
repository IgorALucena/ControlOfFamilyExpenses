const express = require('express');
const routerTypeOfExpense = express.Router();
const { typeOfExpenseController } = require('../controllers/typeOfExpenseController');

routerTypeOfExpense.get('/:type?', typeOfExpenseController);

module.exports = { routerTypeOfExpense };