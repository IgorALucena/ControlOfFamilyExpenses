const express = require('express');
const routerResponsible = express.Router();
const {searchResponsibleController} = require('../controllers/responsibleController')

routerResponsible.get('/:id?', searchResponsibleController );

module.exports = {routerResponsible};