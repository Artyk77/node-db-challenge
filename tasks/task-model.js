const db = require('../data/db-config.js')

module.exports = {
    getTasks,
    addTask
}

function getTasks() {
    return db('tasks')
        .then(tasks => {
            tasks.map( task => {
                if(task.completed) {
                    task.completed = true
                }
                else {
                    task.completed = false
                }
            })
            return tasks
        })
}

function addTask(taskData) {
    return db('tasks')
        .insert(taskData, 'id')
        .then(([id]) => {
            return db('tasks')
                .where({ id })
                .then(taskEntry => {
                    return taskEntry
                })
        })
} 