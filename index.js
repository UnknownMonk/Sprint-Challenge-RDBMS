const express = require('express');
const helmet = require('helmet');
const db = require('./data/dbConfig.js');
const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/action', async (req, res) => {
  try {
    const roles = await db('action');
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.get('/api/project', async (req, res) => {
  try {
    const roles = await db('project');
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.post('/api/action', async (req, res) => {
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

server.post('/api/project', async (req, res) => {
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

server.get('/api/project/:id', (req, res) => {
  const { id } = req.params;
  db('project')
    .where({ id })
    .then(project => {
      db('action')
        .where({ project_id: id })
        .then(action => {
          return res.status(200).json({ ...project, actions: action });
        })
        .catch(() => {
          return res.status(500).json({ Error: 'Project data not found' });
        });
    });
});

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`Hello darkness my old friend.. Server open on${port}`)
);
