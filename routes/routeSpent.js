const express = require('express');
const routerSpent = express.Router();
const { spentPerPeriodController, spentValueController, spentResponsibleController, registerSpent, deleteSpent, editSpent } = require('../controllers/spentControllers');

routerSpent.get('/:period', spentPerPeriodController
    // #swagger.name = 'searchSpentPerPeriod'
    // #swagger.description = 'Designated route to search for expenses by period.'
    //#swagger.tags = ['Spent']
);

routerSpent.get('/value/:value', spentValueController
    // #swagger.name = 'searchSpentPerValue'
    // #swagger.description = 'Designated route to search for expenses by value.'
    //#swagger.tags = ['Spent']
);

routerSpent.get('/responsible/:id', spentResponsibleController
    // #swagger.name = 'searchSpentPerResponsible'
    // #swagger.description = 'Designated route to search for expenses by responsible.'
    //#swagger.tags = ['Spent']
);

routerSpent.post('/register', registerSpent
    // #swagger.name = 'createSpent'
    // #swagger.description = 'Designated route to create expenses.'
    //#swagger.tags = ['Spent']
    /*  #swagger.parameters['Spent'] = {      
      in: 'body',
      type: 'object',
      required: true,
      '@schema': {
        properties: {
           data_cadastro:{
            type: "date-time"
           },
           id_responsavel: {
            type: "integer"
           },
           id_tipo_gasto: {
            type: "integer"
           },
           id_estabelecimento: {
            type: "integer"
           },
           observacao: {
            type: "string"
           },
           valor: {
            type: "string"
           },
        },
        required: ["data_cadastro", "id_responsavel", "id_tipo_gasto", "id_estabelecimento", "observacao", "valor"]
      },
    } */
);

routerSpent.delete('/delete/:id', deleteSpent
    // #swagger.name = 'deleteSpent'
    // #swagger.description = 'Designated route to delete expenses.'
    //#swagger.tags = ['Spent']
);

routerSpent.put('/edit/:id', editSpent
    // #swagger.name = 'editSpent'
    // #swagger.description = 'Designated route to edit expenses.'
    //#swagger.tags = ['Spent']
    /*  #swagger.parameters['Spent'] = {      
      in: 'body',
      type: 'object',
      required: true,
      '@schema': {
        properties: {
           data_cadastro:{
            type: "date-time"
           },
           id_responsavel: {
            type: "integer"
           },
           id_tipo_gasto: {
            type: "integer"
           },
           id_estabelecimento: {
            type: "integer"
           },
           observacao: {
            type: "string"
           },
           valor: {
            type: "string"
           },
        },
        required: ["data_cadastro", "id_responsavel", "id_tipo_gasto", "id_estabelecimento", "observacao", "valor"]
      },
    } */
);

module.exports = { routerSpent };