const Router = require('express').Router()

const reunions = require('../controllers/reunion.controller')

// Create a new fournisseur
Router.post('/', reunions.create)

// Retrieve all declarations
Router.get('/', reunions.findAll)

// Retrieve a single fournisseur with id
Router.get('/:id', reunions.findOne)

// Update a fournisseur with id
Router.put('/:id', reunions.update)

// Delete a fournisseur with id
Router.delete('/:id', reunions.delete)

// Delete all fournisseurs
Router.delete('/', reunions.deleteAll)

module.exports = Router
