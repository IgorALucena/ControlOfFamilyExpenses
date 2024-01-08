const express = require('express');
const routerEstablishment = express.Router();
const { searchEstablishmentController, registerEstablishment, deleteEstablishment, editEstablishment } = require('../controllers/establishmentController');

routerEstablishment.get('/:nameEstablishment?', searchEstablishmentController);

routerEstablishment.post('/register', registerEstablishment);

routerEstablishment.delete('/delete/:id', deleteEstablishment);

routerEstablishment.put('/edit/:id', editEstablishment);

module.exports = { routerEstablishment }