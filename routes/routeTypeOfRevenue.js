const express = require('express');
const routerTypeOfRevenue = express.Router();
const { searchTypeOfRevenue, registerTypeOfRevenue, deleteTypeOfRevenue, editTypeOfRevenue } = require('../controllers/typeOfRevenueController');

routerTypeOfRevenue.get('/:typeOfRevenue?', searchTypeOfRevenue
    // #swagger.name = 'searchTypeOfRevenue'
    // #swagger.description = 'Designated route for revenue type search.'
    //#swagger.tags = ['Type of revenue']
);

routerTypeOfRevenue.post('/register', registerTypeOfRevenue
    // #swagger.name = 'createTypeOfRevenue'
    // #swagger.description = 'Designated route for revenue type create.'
    //#swagger.tags = ['Type of revenue']
    /*  #swagger.parameters['Type of revenue'] = {      
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

routerTypeOfRevenue.delete('/delete/:id', deleteTypeOfRevenue
    // #swagger.name = 'deleteTypeOfRevenue'
    // #swagger.description = 'Designated route for revenue type delete.'
    //#swagger.tags = ['Type of revenue']
);

routerTypeOfRevenue.put('/edit/:id', editTypeOfRevenue
    // #swagger.name = 'editTypeOfRevenue'
    // #swagger.description = 'Designated route for revenue type edit.'
    //#swagger.tags = ['Type of revenue']
    /*  #swagger.parameters['Type of revenue'] = {      
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

module.exports = { routerTypeOfRevenue };