const db = require('../models')
const Responsable_hop = db.responsable_hop

// Create and Save a new categorie
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  // Save Categorie in the database
  Responsable_hop.create(req.body)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving responsable_hop',
      })
    })
}

// Retrieve all categories from the database (with condition).
exports.findAll = (req, res) => {
  Responsable_hop.findAll()
    .then((responsable_hop) => {
      if (responsable_hop) {
        res.send(responsable_hop)
      } else {
        res.status(404).send({
          message: `Cannot find responsable_hop.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving responsable_hop',
      })
    })
}

// Find a single categorie with a id
exports.findOne = (req, res) => {
  const id = req.params.id
  Responsable_hop.findByPk(id)
    .then((responsable_hop) => {
      if (responsable_hop) {
        res.send(responsable_hop)
      } else {
        res.status(404).send({
          message: `Cannot find responsable_hop with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Responsable_hop with id: ' + id,
      })
    })
}

// Update a categorie identified by the id in the request


// Delete a categorie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Responsable_hop.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.send({
        message: `success.`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deleting Responsable_hop with id: ' + id,
      })
    })
}
// Delete all categories from the database.
exports.deleteAll = (req, res) => {
  Responsable_hop.destroy({
    where: {},
  })
    .then(() => {
      res.send({
        message: `success.`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deleting Responsable_hop',
      })
    })
}
