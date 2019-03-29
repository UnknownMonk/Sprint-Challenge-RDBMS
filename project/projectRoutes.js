const project = require('express').Router();
const db = require('../data/dbConfig');

project.get('/', async (req, res) => {
  try {
    const roles = await db('project');
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json(error);
  }
});

project.post('/', async (req, res) => {
  try {
    const [id] = await db('project').insert(req.body);

    const project = await db('project')
      .where({ id })
      .first();

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error });
  }
});

project.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const project = await db('project').where({ id });
    const action = await db('action').where({ project_id: id });
    res.status(200).json({ ...project, action });
  } catch (error) {
    res.status(500).json({ Error: 'Project data not found' });
  }
});

module.exports = project;
