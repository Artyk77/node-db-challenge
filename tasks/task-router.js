const express = require('express')

const Tasks = require('./task-model.js')

const router = express.Router();

router.get('/', (req, res) => {
    Tasks.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks'})
        })
})

router.post('/', (req, res) => {
    Tasks.addTask(req.body)
        .then(task => {
            res.json(task)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add task'})
        })
})

module.exports = router