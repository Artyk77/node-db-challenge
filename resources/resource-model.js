const db = require('../data/db-config.js')

module.exports = {
    getResources,
    addResource
}

function getResources() {
    return db('resources')
        .then(resources => {
            return resources
        })
}

function addResource(resourceData) {
    return db('resources')
        .insert(resourceData, 'id')
        .then(([id]) => {
            return db('resources')
                .where({ id })
                .then(resourceEntry => {
                    return resourceEntry
                })
        })
} 