const express = require('express')

const Resources = require('./resource-model')

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources'})
        })
})

router.post('/', (req, res) => {
    Resources.addResource(req.body)
        .then(resource => {
            res.json(resource)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add resource'})
        })
})

module.exports = router