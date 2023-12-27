const express = require('express');
const routerSpent = express.Router();
const { spentPerPeriodController, spentValueController, spentResponsibleController } = require('../controllers/spentControllers');

routerSpent.get('/:period', spentPerPeriodController);

routerSpent.get('/value/:value', spentValueController);

routerSpent.get('/responsible/:id', spentResponsibleController);

module.exports = { routerSpent };