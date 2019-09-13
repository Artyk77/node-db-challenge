exports.seed = function(knex) {
    return knex('projects').insert([
        { project_name: 'Project 1', project_description: 'project description 1', completed: true },
        { project_name: 'Project 2', completed: true },
        { project_name: 'Project 3', project_description: 'project description 1', completed: false },
        { project_name: 'Project 4', completed: false },
    ])
}