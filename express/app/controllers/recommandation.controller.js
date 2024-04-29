const db = require('../models')
const Recommandation = db.recommandation

// Create and Save a new categorie
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  // Save Categorie in the database
  Recommandation.create({
    titre: req.body.titre,
    description: req.body.description,
    domaine: req.body.domaine,
    specification: req.body.specification,
    retenu: req.body.retenu || 0,
    etat: req.body.etat || 0,
    date_ins: req.body.date_ins || Date.now(),
    createdAt: req.body.createdAt || Date.now(),
    updatedAt: req.body.updatedAt || Date.now(),
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving recommandation',
      })
    })
}

// Retrieve all categories from the database (with condition).
exports.findAll = (req, res) => {
  Recommandation.findAll()
    .then((recommandation) => {
      if (recommandation) {
        res.send(recommandation)
      } else {
        res.status(404).send({
          message: `Cannot find recommandation.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving recommandation',
      })
    })
}

// Find a single categorie with a id
exports.findOne = (req, res) => {
  const id = req.params.id
  Recommandation.findByPk(id)
    .then((recommandation) => {
      if (recommandation) {
        res.send(recommandation)
      } else {
        res.status(404).send({
          message: `Cannot find recommandation with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving recommandation with id: ' + id,
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
  Recommandation.update(
    {
      titre: req.body.titre,
      description: req.body.description,
      domaine: req.body.domaine,
      specification: req.body.specification,
      retenu: req.body.retenu,
      etat: req.body.etat,
      date_ins: req.body.date_ins,
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
        message: 'Error updating Recommandation with id: ' + id,
      })
    })
}

// Delete a categorie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Recommandation.destroy({
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
        message: 'Error deleting Recommandation with id: ' + id,
      })
    })
}
// Delete all categories from the database.
exports.deleteAll = (req, res) => {
  Recommandation.destroy({
    where: {},
  })
    .then(() => {
      res.send({
        message: `success.`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deleting Recommandation',
      })
    })
}
