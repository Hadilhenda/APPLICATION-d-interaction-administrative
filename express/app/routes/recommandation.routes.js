const Router = require('express').Router()

const recommandations = require('../controllers/recommandation.controller.js')

// Create a new recommandation
Router.post('/', recommandations.create)

// Retrieve all recommandations
Router.get('/', recommandations.findAll)

// Retrieve all published recommandations
// Router.get('/published', recommandations.findAllPublished)

// Retrieve a single recommandation with id
Router.get('/:id', recommandations.findOne)

// Update a recommandation with id
Router.put('/:id', recommandations.update)

// Delete a recommandation with id
Router.delete('/:id', recommandations.delete)

// Delete all recommandations
Router.delete('/', recommandations.deleteAll)

module.exports = Router
