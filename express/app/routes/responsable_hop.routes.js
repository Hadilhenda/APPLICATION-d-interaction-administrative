const Router = require('express').Router()

const responsable_hops = require('../controllers/responsable_hop.controller.js')

// Create a new responsable_hop
// Router.post('/', responsable_hops.create)

// Retrieve all responsable_hops
Router.get('/', responsable_hops.findAll)

// Retrieve all published responsable_hops
// Router.get('/published', responsable_hops.findAllPublished)

// Retrieve a single responsable_hop with id
Router.get('/:id', responsable_hops.findOne)

// Update a responsable_hop with id
// Router.put('/:id', responsable_hops.update)

// Delete a responsable_hop with id
Router.delete('/:id', responsable_hops.delete)

// Delete all responsable_hops
Router.delete('/', responsable_hops.deleteAll)

module.exports = Router
