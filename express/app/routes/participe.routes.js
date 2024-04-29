const Router = require('express').Router()

const participes = require('../controllers/participe.controller.js')

// Create a new analyste
Router.post('/', participes.create)

// Retrieve all analystes
Router.get('/:id', participes.findAll)
Router.get('/user/:id', participes.findAllbyUser)

// Retrieve all published analystes
// Router.get('/published', analystes.findAllPublished)

// Retrieve a single analyste with id
Router.get('/one/:id', participes.findOne)

// Update a analyste with id
Router.put('/:id', participes.update)

// Delete a analyste with id
Router.delete('/:id', participes.delete)

// Delete all analystes
Router.delete('/', participes.deleteAll)

module.exports = Router
