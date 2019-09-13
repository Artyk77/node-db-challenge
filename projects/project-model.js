const db = require('../data/db-config.js')

module.exports = {
    getProjects,
    addProject
}

function getProjects() {
    return db('projects as p')
        .then(projects => {
            projects.map( project => {
                if(project.completed) {
                    project.completed = true
                }
                else {
                    project.completed = false
                }
            })
            return projects
        })
}

function addProject(projectData) {
    return db('projects as p')
        .insert(projectData, 'id')
        .then(([id]) => {
            return db('projects')
                .where({ id })
                .then(projectEntry => {
                    return projectEntry
                })
        })
} 