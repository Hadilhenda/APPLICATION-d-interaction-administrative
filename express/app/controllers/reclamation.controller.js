const db = require('../models')
const Reclamation = db.reclamation
const Op = db.Sequelize.Op
// Create and Save a new categorie
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  // Save Categorie in the database
  Reclamation.create({
    titre: req.body.titre,
    image: req.body.image,
    localisation: req.body.localisation,
    createdAt: req.body.createdAt || Date.now(),
    updatedAt: req.body.updatedAt || Date.now(),
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Reclamation',
      })
    })
}
exports.upload = async (req, res) => {
  console.log(req.body)
  res.status(200).send({
    message: 1,
  })
}
// Retrieve all categories from the database (with condition).
exports.findAll = (req, res) => {
  const { titre } = req.query
  let condition = titre ? { titre: { [Op.like]: `%${titre}%` } } : null
  Reclamation.findAll({ where: condition })
    .then((reclamation) => {
      if (reclamation) {
        res.send(reclamation)
      } else {
        res.status(404).send({
          message: `Cannot find Reclamation.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Reclamation',
      })
    })
}

// Find a single categorie with a id
exports.findOne = (req, res) => {
  const id = req.params.id
  Reclamation.findByPk(id)
    .then((reclamation) => {
      if (reclamation) {
        res.send(reclamation)
      } else {
        res.status(404).send({
          message: `Cannot find Reclamation with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Reclamation with id: ' + id,
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
  Reclamation.update(
    {
      date_rec: req.body.date_rec,
      titre: req.body.titre,
      image: req.body.image,
      localisation: req.body.localisation,
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
        message: 'Error updating Reclamation with id: ' + id,
      })
    })
}

// Delete a categorie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Reclamation.destroy({
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
        message: 'Error deleting Reclamation with id: ' + id,
      })
    })
}
// Delete all categories from the database.
exports.deleteAll = (req, res) => {
  Reclamation.destroy({
    where: {},
  })
    .then(() => {
      res.send({
        message: `success.`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deleting Reclamation',
      })
    })
}
