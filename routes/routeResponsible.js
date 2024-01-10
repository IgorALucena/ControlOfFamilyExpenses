const express = require('express');
const routerResponsible = express.Router();
const { searchResponsibleController, registerResponsible, deleteResponsible, editResponsible } = require('../controllers/responsibleController')

routerResponsible.get('/:id?', searchResponsibleController
    // #swagger.name = 'searchResponsible'
    // #swagger.description = 'Designated route to search for those responsible.'
    //#swagger.tags = ['Responsible']
);

routerResponsible.post('/register', registerResponsible
    // #swagger.name = 'createResponsible'
    // #swagger.description = 'Designated route to create those responsible.'
    //#swagger.tags = ['Responsible']
    /*  #swagger.parameters['Responsible'] = {      
      in: 'body',
      type: 'object',
      required: true,
      '@schema': {
        properties: {
          data_cadastro: {
            type: "string"
          },
        },
        required: ["data_cadastro"]
      },
    } */
);

routerResponsible.delete('/delete/:id', deleteResponsible
    // #swagger.name = 'createResponsible'
    // #swagger.description = 'Designated route to delete those responsible.'
    //#swagger.tags = ['Responsible']
);

routerResponsible.put('/edit/:id', editResponsible
    // #swagger.name = 'createResponsible'
    // #swagger.description = 'Designated route to delete those responsible.'
    //#swagger.tags = ['Responsible']
    /*  #swagger.parameters['Responsible'] = {      
      in: 'body',
      type: 'object',
      required: true,
      '@schema': {
        properties: {
          data_cadastro: {
            type: "string"
          },
        },
        required: ["data_cadastro"]
      },
    } */
);

module.exports = { routerResponsible };