const express = require('express');

const gameController = express.Router();

const db = require('../../data/knex');

gameController.get('/', async (req, res) => {
  try {
    const accounts = await db('user');
    res.json(accounts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = gameController;