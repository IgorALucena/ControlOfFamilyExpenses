const express = require('express');
const routerRevenue = express.Router();
const { searchRevenueController, registerRevenue, editRevenue, deleteRevenue } = require('../controllers/revenueController');

routerRevenue.get('/period/:period', searchRevenueController
    // #swagger.name = 'searchRevenue'
    // #swagger.description = 'Designated route for revenues search.'
    //#swagger.tags = ['Revenues']
);

routerRevenue.post('/register', registerRevenue
    // #swagger.name = 'createRevenue'
    // #swagger.description = 'Designated route to create revenue.'
    //#swagger.tags = ['Revenues']
    /*  #swagger.parameters['Revenues'] = {      
      in: 'body',
      type: 'object',
      required: true,
      '@schema': {
        properties: {
          id_tipo_receita: {
            type: "integer"
          },
          id_responsavel: {
            type: "integer"
          },
          data_cadastro: {
            type: "date-time"
          },
          observacao: {
            type: "string"
          },
          valor: {
            type: "number"
          },
        },
        required: ["id_tipo_receita", "id_responsavel", "data_cadastro", "observacao", "valor"]
      },
    }*/
);

routerRevenue.delete('/delete/:id', deleteRevenue
    // #swagger.name = 'deleteRevenue'
    // #swagger.description = 'Designated route to delete revenue.'
    //#swagger.tags = ['Revenues']
);

routerRevenue.put('/edit/:id', editRevenue
    // #swagger.name = 'editRevenue'
    // #swagger.description = 'Designated route to edit revenue.'
    //#swagger.tags = ['Revenues']
    /*  #swagger.parameters['Revenues'] = {      
      in: 'body',
      type: 'object',
      required: true,
      '@schema': {
        properties: {
          id_tipo_receita: {
            type: "integer"
          },
          id_responsavel: {
            type: "integer"
          },
          data_cadastro: {
            type: "date-time"
          },
          observacao: {
            type: "string"
          },
          valor: {
            type: "number"
          },
        },
        required: ["id_tipo_receita", "id_responsavel", "data_cadastro", "observacao", "valor"]
      },
    }*/
);

module.exports = { routerRevenue };