const Router = require('express').Router()

const admins = require('../controllers/admin.controller.js')

// Create a new analyste
Router.post('/', admins.create)

// Retrieve all analystes
Router.get('/', admins.findAll)

// Retrieve all published analystes
// Router.get('/published', admins.findAllPublished)

// Retrieve a single analyste with id
Router.get('/:id', admins.findOne)

// Update a analyste with id
Router.put('/:id', admins.update)

// Delete a analyste with id
Router.delete('/:id', admins.delete)

// Delete all analystes
Router.delete('/', admins.deleteAll)

module.exports = Router
