const db = require('../models')
const Analyste = db.analyste

// Create and Save a new categorie
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  // Save Categorie in the database
  Analyste.create({
    diplome: req.body.diplome,
    specialite: req.body.specialite,
    mission: req.body.mission,
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Analyste',
      })
    })
}

// Retrieve all categories from the database (with condition).
exports.findAll = (req, res) => {
  Analyste.findAll()
    .then((analyste) => {
      if (analyste) {
        res.send(analyste)
      } else {
        res.status(404).send({
          message: `Cannot find analyste.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving analyste',
      })
    })
}

// Find a single categorie with a id
exports.findOne = (req, res) => {
  const id = req.params.id
  Analyste.findByPk(id)
    .then((analyste) => {
      if (analyste) {
        res.send(analyste)
      } else {
        res.status(404).send({
          message: `Cannot find analyste with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving analyste with id: ' + id,
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
  Analyste.update(
    {
      diplome: req.body.diplome,
      specialite: req.body.specialite,
      mission: req.body.mission,
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
        message: 'Error updating Analyste with id: ' + id,
      })
    })
}

// Delete a categorie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Analyste.destroy({
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
        message: 'Error deleting Analyste with id: ' + id,
      })
    })
}
// Delete all categories from the database.
exports.deleteAll = (req, res) => {
  Analyste.destroy({
    where: {},
  })
    .then(() => {
      res.send({
        message: `success.`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deleting Analyste',
      })
    })
}
