const express = require('express')
const helmet = require('helmet');

const ProjectRouter = require('./projects/project.router')
const TaskRouter = require('./tasks/task-router')
const ResourceRouter = require('./resources/resource-router')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', ProjectRouter)
server.use('/api/tasks', TaskRouter)
server.use('/api/resources', ResourceRouter)

server.get('/', (req, res) => {
    res.json({message: 'It`s Working !!!'})
})

module.exports = server;