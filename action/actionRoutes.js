const action = require('express').Router();
const db = require('../data/dbConfig');

action.get('/', async (req, res) => {
  try {
    const roles = await db('action');
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json(error);
  }
});

action.post('/', async (req, res) => {
  try {
    const [id] = await db('action').insert(req.body);

    const action = await db('action')
      .where({ id })
      .first();

    res.status(201).json(action);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = action;
