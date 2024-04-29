const Router = require('express').Router()

const notifiers = require('../controllers/notifications.controller')

// Create a new fournisseur
Router.post('/', notifiers.create)

// Retrieve all declarations
Router.get('/:id', notifiers.findAll)

// Retrieve a single fournisseur with id
Router.get('/:id', notifiers.findOne)

// Update a fournisseur with id
// Router.put('/:id', notifiers.update)

// Delete a fournisseur with id
Router.delete('/:id', notifiers.delete)

// Delete all fournisseurs
Router.delete('/', notifiers.deleteAll)

module.exports = Router
