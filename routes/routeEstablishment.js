const express = require('express');
const routerEstablishment = express.Router();
const { searchEstablishmentController } = require('../controllers/EstablishmentController');

routerEstablishment.get('/:nameEstablishment?', searchEstablishmentController);

module.exports = { routerEstablishment }