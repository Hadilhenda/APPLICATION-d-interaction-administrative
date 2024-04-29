const Router = require('express').Router()

const municipalites = require('../controllers/municipalite.controller.js')

// Create a new municipalite
Router.post('/', municipalites.create)

// Retrieve all municipalites
Router.get('/', municipalites.findAll)

// Retrieve all published municipalites
// Router.get('/published', municipalites.findAllPublished)

// Retrieve a single municipalite with id
Router.get('/:id', municipalites.findOne)

// Update a municipalite with id
Router.put('/:id', municipalites.update)

// Delete a municipalite with id
Router.delete('/:id', municipalites.delete)

// Delete all municipalites
Router.delete('/', municipalites.deleteAll)

module.exports = Router
