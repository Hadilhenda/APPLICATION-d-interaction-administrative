const Router = require('express').Router()

const dechets = require('../controllers/dechet.controller')

// Create a new fournisseur
Router.post('/', dechets.create)

// Retrieve all declarations
Router.get('/', dechets.findAll)

// Retrieve a single fournisseur with id
Router.get('/:id', dechets.findOne)

// Update a fournisseur with id
Router.put('/:id', dechets.update)

// Delete a fournisseur with id
Router.delete('/:id', dechets.delete)

// Delete all fournisseurs
Router.delete('/', dechets.deleteAll)

Router.get('/resp/:id', dechets.findResp)

module.exports = Router
