const Router = require('express').Router()

const citoyens = require('../controllers/citoyen.controller.js')

// Create a new citoyen
Router.post('/', citoyens.create)
Router.get('/resp/:id', citoyens.findResp)
// Retrieve all citoyens
Router.get('/', citoyens.findAll)
// Retrieve all decNais
Router.get('/naissances/:id', citoyens.findDecNai)
//findDecDeces
Router.get('/deces/:id', citoyens.findDecDeces)
// Retrieve all published citoyens
// router.get('/published', citoyens.findAllPublished)
Router.get('/Decladeces/', citoyens.DecDeces)
// Retrieve a single citoyen with id
Router.get('/:id', citoyens.findOne)

// Update a citoyen with id
Router.put('/:id', citoyens.update)

// Delete a citoyen with id
Router.delete('/:id', citoyens.delete)

// Delete all citoyens
Router.delete('/', citoyens.deleteAll)

module.exports = Router
