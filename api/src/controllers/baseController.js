const express = require('express');

const baseController = express.Router();

const accountsController = require('./accounts/accountsController');
const gameController = require('./game/gameController');

baseController.use('/accounts', accountsController);
baseController.use('/game', gameController);

module.exports = baseController;