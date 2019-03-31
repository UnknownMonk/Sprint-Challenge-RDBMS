const express = require('express');
const helmet = require('helmet');
const db = require('./data/dbConfig.js');
const actionRoutes = require('./action/actionRoutes');
const projectRoutes = require('./project/projectRoutes');
const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/action', actionRoutes);
server.use('/api/project', projectRoutes);

server.get('/', (req, res) => {
  res.status(200).json('Home route working');
});

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`Hello darkness my old friend.. Server open on${port}`)
);
