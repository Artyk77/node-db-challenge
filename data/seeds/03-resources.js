exports.seed = function(knex) {
    return knex('resources').insert([
        { resource_name: 'resource 1 name', resource_description: 'resource 1 description' },
        { resource_name: 'resource 2 name', resource_description: 'resource 2 description' },
        { resource_name: 'resource 3 name', resource_description: 'resource 3 description' },
        { resource_name: 'resource 4 name', resource_description: 'resource 4 description' },
    ])
}