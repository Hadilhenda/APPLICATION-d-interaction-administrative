const Router = require('express').Router()

const fournisseurs = require('../controllers/fournisseur.controller')

// Create a new fournisseur
Router.post('/', fournisseurs.create)

// Retrieve all declarations
Router.get('/', fournisseurs.findAll)


// Retrieve a single fournisseur with id
Router.get('/:id', fournisseurs.findOne)

// Update a fournisseur with id
Router.put('/:id', fournisseurs.update)

// Delete a fournisseur with id
Router.delete('/:id', fournisseurs.delete)

// Delete all fournisseurs
Router.delete('/', fournisseurs.deleteAll)

module.exports = Router
