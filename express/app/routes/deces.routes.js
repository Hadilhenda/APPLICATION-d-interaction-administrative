const router = require('express').Router()

const decess = require('../controllers/deces.controller.js')

// Create a new deces
router.post('/', decess.create)

// Retrieve all decess
router.get('/', decess.findAll)

// Retrieve all published decess
router.get('/published', decess.findAllPublished)

// Retrieve a single deces with id
router.get('/:id', decess.findOne)

// Update a deces with id
router.put('/:id', decess.update)

// Delete a deces with id
router.delete('/:id', decess.delete)

// Delete all decess
router.delete('/', decess.deleteAll)

module.exports = router
