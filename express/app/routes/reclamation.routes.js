const Router = require('express').Router()

const reclamations = require('../controllers/reclamation.controller')
const upload = require('../middleware/upload')
// Create a new fournisseur
Router.post('/', reclamations.create)
// upload a new photo
Router.post('/upload', upload.single('img'), reclamations.upload)

// Retrieve all declarations
Router.get('/', reclamations.findAll)

// Retrieve a single fournisseur with id
Router.get('/:id', reclamations.findOne)

// Update a fournisseur with id
Router.put('/:id', reclamations.update)

// Delete a fournisseur with id
Router.delete('/:id', reclamations.delete)

// Delete all fournisseurs
Router.delete('/', reclamations.deleteAll)

module.exports = Router
