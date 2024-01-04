const express = require('express');
const routerTypeOfExpense = express.Router();
const { typeOfExpenseController, registerTypeOfExpenseController, deleteTypeOfExpenseController, editTypeOfExpenseController } = require('../controllers/typeOfExpenseController');

routerTypeOfExpense.get('/:type?', typeOfExpenseController);

routerTypeOfExpense.post('/register', registerTypeOfExpenseController);

routerTypeOfExpense.delete('/delete/:id', deleteTypeOfExpenseController);

routerTypeOfExpense.put('/edit/:id', editTypeOfExpenseController);

module.exports = { routerTypeOfExpense };