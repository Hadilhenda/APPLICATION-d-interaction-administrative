const Router = require('express').Router()

const agences = require('../controllers/agence.controller.js')

// Create a new analyste
Router.post('/', agences.create)

// Retrieve all analystes
Router.get('/', agences.findAll)

// Retrieve all published analystes
// Router.get('/published', agences.findAllPublished)

// Retrieve a single analyste with id
Router.get('/:id', agences.findOne)

// Update a analyste with id
Router.put('/:id', agences.update)

// Delete a analyste with id
Router.delete('/:id', agences.delete)

// Delete all analystes
Router.delete('/', agences.deleteAll)

module.exports = Router
