const express = require('express');

const lobbyController = express.Router();

const db = require('../../data/knex');

lobbyController.get('/', async (req, res) => {
  try {
    const lobbies = await db('lobby');
    res.json(lobbies);
  } catch (err) {
    res.status(500).json(err);
  }
});

lobbyController.get('/:id', async (req, res) => {
  try {
    const lobbies = await db('lobby').where({ id: req.params.id });
    res.json(lobbies);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = lobbyController;