const express = require('express');
const routerSpent = express.Router();
const { spentPerPeriodController, spentValueController, spentResponsibleController, registerSpent, deleteSpent, editSpent } = require('../controllers/spentControllers');

routerSpent.get('/:period', spentPerPeriodController);

routerSpent.get('/value/:value', spentValueController);

routerSpent.get('/responsible/:id', spentResponsibleController);

routerSpent.post('/register', registerSpent);

routerSpent.delete('/delete/:id', deleteSpent);

routerSpent.put('/edit/:id', editSpent);

module.exports = { routerSpent };