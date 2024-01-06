const express = require('express');
const routerResponsible = express.Router();
const { searchResponsibleController, registerResponsible, deleteResponsible, editResponsible } = require('../controllers/responsibleController')

routerResponsible.get('/:id?', searchResponsibleController);

routerResponsible.post('/register', registerResponsible);

routerResponsible.delete('/delete/:id', deleteResponsible);

routerResponsible.put('/edit/:id', editResponsible);

module.exports = { routerResponsible };