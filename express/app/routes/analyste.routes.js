const Router = require('express').Router()

const analystes = require('../controllers/analyste.controller.js')

// Create a new analyste
Router.post('/', analystes.create)

// Retrieve all analystes
Router.get('/', analystes.findAll)

// Retrieve all published analystes
// Router.get('/published', analystes.findAllPublished)

// Retrieve a single analyste with id
Router.get('/:id', analystes.findOne)

// Update a analyste with id
Router.put('/:id', analystes.update)

// Delete a analyste with id
Router.delete('/:id', analystes.delete)

// Delete all analystes
Router.delete('/', analystes.deleteAll)

module.exports = Router
