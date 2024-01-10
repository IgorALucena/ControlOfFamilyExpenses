const express = require('express');
const routerEstablishment = express.Router();
const { searchEstablishmentController, registerEstablishment, deleteEstablishment, editEstablishment } = require('../controllers/establishmentController');

routerEstablishment.get('/:nameEstablishment?', searchEstablishmentController
    // #swagger.name = 'searchEstablishment'
    // #swagger.description = 'route aimed at searching for establishments.'
    //#swagger.tags = ['Establishment']
);

routerEstablishment.post('/register', registerEstablishment
    // #swagger.tags = ['Establishment']
    // #swagger.name = 'createEstablishment'
    // #swagger.description = 'route aimed at registering establishments.'
    /*  #swagger.parameters['Establishment'] = {      
      in: 'body',
      type: 'object',
      required: true,
      '@schema': {
        properties: {
          nome: {
            type: "string"
          },
        },
        required: ["nome"]
      },
    } */
);

routerEstablishment.delete('/delete/:id', deleteEstablishment
    // #swagger.tags = ['Establishment']
    // #swagger.name = 'removeEstablisment'
    // #swagger.description = 'route aimed at excluding establishments.'
);

routerEstablishment.put('/edit/:id', editEstablishment
    // #swagger.tags = ['Establishment']
    // #swagger.name = 'editEstablishment'
    // #swagger.description = 'route aimed at publishing establishments.'
    /*  #swagger.parameters['Establishment'] = {      
      in: 'body',
      type: 'object',
      required: true,
      '@schema': {
        properties: {
          nome: {
            type: "string"
          },
        },
        required: ["nome"]
      },
    } */
);

module.exports = { routerEstablishment }