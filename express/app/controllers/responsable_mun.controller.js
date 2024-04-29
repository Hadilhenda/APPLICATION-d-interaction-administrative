const db = require('../models')
const Responsable_mun = db.responsable_mun

// Create and Save a new categorie
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  // Save Categorie in the database
  Responsable_mun.create({
    diplome: req.body.diplome,
    specialite: req.body.specialite,
    mission: req.body.mission,
    createdAt: req.body.createdAt || Date.now(),
    updatedAt: req.body.updatedAt || Date.now(),
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving responsable_mun',
      })
    })
}

// Retrieve all categories from the database (with condition).
exports.findAll = (req, res) => {
  Responsable_mun.findAll()
    .then((responsable_mun) => {
      if (responsable_mun) {
        res.send(responsable_mun)
      } else {
        res.status(404).send({
          message: `Cannot find responsable_mun.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving responsable_mun',
      })
    })
}

// Find a single categorie with a id
exports.findOne = (req, res) => {
  const id = req.params.id
  Responsable_mun.findByPk(id)
    .then((responsable_mun) => {
      if (responsable_mun) {
        res.send(responsable_mun)
      } else {
        res.status(404).send({
          message: `Cannot find responsable_mun with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Responsable_mun with id: ' + id,
      })
    })
}

// Update a categorie identified by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  const id = req.params.id
  Responsable_mun.update(
    {
      diplome: req.body.diplome,
      specialite: req.body.specialite,
      mission: req.body.mission,
      createdAt: req.body.createdAt || Date.now(),
    updatedAt: req.body.updatedAt || Date.now(),
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then(() => {
      res.send({
        message: `success.`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating responsable_mun with id: ' + id,
      })
    })
}

// Delete a categorie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Responsable_mun.destroy({
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
        message: 'Error deleting Responsable_mun with id: ' + id,
      })
    })
}
// Delete all categories from the database.
exports.deleteAll = (req, res) => {
  Responsable_mun.destroy({
    where: {},
  })
    .then(() => {
      res.send({
        message: `success.`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deleting Responsable_mun',
      })
    })
}
