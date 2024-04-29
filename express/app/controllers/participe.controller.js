const db = require('../models')
const Participe = db.participe
const Op = db.Sequelize.Op
const sql = db.sequelize
// Create and Save a new categorie
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  // Save Categorie in the database
  Participe.create({
    id_user: req.body.id_user,
    id_reuni: req.body.id_reuni,
    date_partici: req.body.date_partici,
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Participe',
      })
    })
}

exports.findAll = async (req, res) => {
  const id = req.params.id
  const data = await sql
    .query(
      `SELECT participes.id, participes.createdAt, users.id as iduser, users.nom, users.prenom FROM participes, users where users.id = participes.id_user and participes.id_reuni = ${id}`
    )
    .then((data) => {
      console.log('data : ', data[0])
      res.send(data[0])
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Candidatures.',
      })
    })
}
exports.findAllbyUser = async (req, res) => {
  const id = req.params.id
  const data = await sql
    .query(
      `SELECT participes.id, participes.createdAt, reunions.id as idreunion, reunions.object, reunions.date,reunions.heure FROM participes, reunions where reunions.id = participes.id_reuni and participes.id_user = ${id}`
    )
    .then((data) => {
      console.log('data : ', data[0])
      res.send(data[0])
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Candidatures.',
      })
    })
}
// Find a single categorie with a id
exports.findOne = (req, res) => {
  const id = req.params.id
  Participe.findByPk(id)
    .then((participe) => {
      if (participe) {
        res.send(participe)
      } else {
        res.status(404).send({
          message: `Cannot find Participe with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Participe with id: ' + id,
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
  Participe.update(
    {
      id_user: req.body.id_user,
      id_reuni: req.body.id_reuni,
      date_partici: req.body.date_partici,
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
        message: 'Error updating Participe with id: ' + id,
      })
    })
}

// Delete a categorie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Participe.destroy({
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
        message: 'Error deleting Participe with id: ' + id,
      })
    })
}
// Delete all categories from the database.
exports.deleteAll = (req, res) => {
  Participe.destroy({
    where: {},
  })
    .then(() => {
      res.send({
        message: `success.`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deleting Participe',
      })
    })
}
