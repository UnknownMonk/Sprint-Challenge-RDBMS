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

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`Hello darkness my old friend.. Server open on${port}`)
);
