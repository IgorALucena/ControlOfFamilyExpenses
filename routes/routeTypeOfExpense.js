const express = require('express');
const routerTypeOfExpense = express.Router();
const { typeOfExpenseController, registerTypeOfExpenseController, deleteTypeOfExpenseController, editTypeOfExpenseController } = require('../controllers/typeOfExpenseController');

routerTypeOfExpense.get('/:type?', typeOfExpenseController
    // #swagger.name = 'searchTypeOfExpense'
    // #swagger.description = 'Designated route for expense type search.'
    //#swagger.tags = ['Type of expense']
);

routerTypeOfExpense.post('/register', registerTypeOfExpenseController
    // #swagger.name = 'createTypeOfExpense'
    // #swagger.description = 'Designated route to create expense type.'
    //#swagger.tags = ['Type of expense']
    /*  #swagger.parameters['Type of expense'] = {      
      in: 'body',
      type: 'object',
      required: true,
      '@schema': {
        properties: {
           nome:{
            type: "string"
           },
        },
        required: ["nome"]
      },
    } */
);

routerTypeOfExpense.delete('/delete/:id', deleteTypeOfExpenseController
    // #swagger.name = 'deleteTypeOfExpense'
    // #swagger.description = 'Designated route to delete expense type.'
    //#swagger.tags = ['Type of expense']
);

routerTypeOfExpense.put('/edit/:id', editTypeOfExpenseController
    // #swagger.name = 'editTypeOfExpense'
    // #swagger.description = 'Designated route to edit expense type.'
    //#swagger.tags = ['Type of expense']
    /*  #swagger.parameters['Type of expense'] = {      
      in: 'body',
      type: 'object',
      required: true,
      '@schema': {
        properties: {
           nome:{
            type: "string"
           },
        },
        required: ["nome"]
      },
    } */
);

module.exports = { routerTypeOfExpense };