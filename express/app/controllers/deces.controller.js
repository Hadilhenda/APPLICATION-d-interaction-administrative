const Deces = require('../models/deces.model.js')
// Create and Save a new analyste
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  // Create a recommandation
  const deces = new Deces({
    ca_d: req.body.ca_d,
    date_deces: req.body.date_deces || Date.now(),
  })
  // Save analyste in the database
  Deces.create(deces, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while creating the deces.',
      })
    else res.send(data)
  })
}
// Retrieve all analyste from the database (with condition).
exports.findAll = (req, res) => {
   const nom = req.query.nom
   Deces.getAll(nom, (err, data) => {
     if (err)
       res.status(500).send({
         message:
           err.message ||
           'Some error occurred while retrieving deces.',
       })
     else res.send(data)
   })
}
// Find a single recommandation with a id
exports.findOne = (req, res) => {
   Deces.findById(req.params.id, (err, data) => {
   if (err) {
     if (err.kind === 'not_found') {
       res.status(404).send({
         message: `Not found deces with id ${req.params.id}.`,
       })
     } else {
       res.status(500).send({
         message: 'Error retrieving deces with id ' + req.params.id,
       })
     }
   } else res.send(data)
 })
}
// find all published recommandations
exports.findAllPublished = (req, res) => {
    Deces.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving deces.',
      })
    else res.send(data)
  })
}
// Update a recommandation identified by the id in the request
exports.update = (req, res) => {
 if (!req.body) {
   res.status(400).send({
     message: 'Content can not be empty!',
   })
 }
 console.log(req.body)
 Deces.updateById(req.params.id, new Deces(req.body), (err, data) => {
   if (err) {
     if (err.kind === 'not_found') {
       res.status(404).send({
         message: `Not found deces with id ${req.params.id}.`,
       })
     } else {
       res.status(500).send({
         message: 'Error updating deces with id ' + req.params.id,
       })
     }
   } else res.send(data)
 })
}
// Delete a recommandation with the specified id in the request
exports.delete = (req, res) => {
    Deces.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found deces with id ${req.params.id}.`,
        })
      } else {
        res.status(500).send({
          message: 'Could not delete deces with id ' + req.params.id,
        })
      }
    } else res.send({ message: `deces was deleted successfully!` })
  })
}
// Delete all recommandations from the database.
exports.deleteAll = (req, res) => {
    Deces.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all deces.',
      })
    else res.send({ message: `All deces were deleted successfully!` })
  })
}
