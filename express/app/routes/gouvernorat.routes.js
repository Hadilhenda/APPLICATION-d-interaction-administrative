const router = require('express').Router()

const gouvernorats = require('../controllers/gouvernorat.controller.js')

// Create a new analyste
router.post('/', gouvernorats.create)

// Retrieve all analystes
router.get('/', gouvernorats.findAll)

// Retrieve all published analystes
router.get('/published', gouvernorats.findAllPublished)

// Retrieve a single analyste with id
router.get('/:id', gouvernorats.findOne)

// Update a analyste with id
router.put('/:id', gouvernorats.update)

// Delete a analyste with id
router.delete('/:id', gouvernorats.delete)

// Delete all analystes
router.delete('/', gouvernorats.deleteAll)

module.exports = router
