const Router = require('express').Router()

const hopitals = require('../controllers/hopital.controller.js')

// Create a new hopital
Router.post('/', hopitals.create)

// Retrieve all hopitals
Router.get('/', hopitals.findAll)

// Retrieve all published hopitals
// Router.get('/published', hopitals.findAllPublished)

// Retrieve a single hopital with id
Router.get('/:id', hopitals.findOne)

// Update a hopital with id
Router.put('/:id', hopitals.update)

// Delete a hopital with id
Router.delete('/:id', hopitals.delete)

// Delete all hopitals
Router.delete('/', hopitals.deleteAll)

module.exports = Router
