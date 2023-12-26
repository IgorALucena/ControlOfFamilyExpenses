const express = require('express');
const routerSpent = express.Router();
const {spentPerPeriod} = require('../controllers/spentControllers');

routerSpent.get('/:period', spentPerPeriod);

module.exports = {routerSpent};