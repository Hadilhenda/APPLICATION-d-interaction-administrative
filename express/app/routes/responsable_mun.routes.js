const Router = require('express').Router()

const responsable_muns = require('../controllers/responsable_mun.controller.js')

// Create a new responsable_mun
Router.post('/', responsable_muns.create)

// Retrieve all responsable_muns
Router.get('/', responsable_muns.findAll)

// Retrieve all published responsable_muns
// Router.get('/published', responsable_muns.findAllPublished)

// Retrieve a single responsable_mun with id
Router.get('/:id', responsable_muns.findOne)

// Update a responsable_mun with id
Router.put('/:id', responsable_muns.update)

// Delete a responsable_mun with id
Router.delete('/:id', responsable_muns.delete)

// Delete all responsable_muns
Router.delete('/', responsable_muns.deleteAll)

module.exports = Router
