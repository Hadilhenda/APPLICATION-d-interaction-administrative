const db = require('../models')
const Reunion = db.reunion

// Create and Save a new categorie
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  // Save Categorie in the database
  Reunion.create({
    object: req.body.object,
    date: req.body.date,
    heure: req.body.heure,
    createdAt: req.body.createdAt || Date.now(),
    updatedAt: req.body.updatedAt || Date.now(),
    id_com : req.body.id_com , 
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Reunion',
      })
    })
}

// Retrieve all categories from the database (with condition).
exports.findAll = (req, res) => {
  Reunion.findAll()
    .then((reunion) => {
      if (reunion) {
        res.send(reunion)
      } else {
        res.status(404).send({
          message: `Cannot find Reunion.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Reunion',
      })
    })
}

// Find a single categorie with a id
exports.findOne = (req, res) => {
  const id = req.params.id
  Reunion.findByPk(id)
    .then((reunion) => {
      if (reunion) {
        res.send(reunion)
      } else {
        res.status(404).send({
          message: `Cannot find Reunion with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Reunion with id: ' + id,
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
  Reunion.update(
    {
      object: req.body.object,
      date: req.body.date,
      heure: req.body.heure,
      createdAt: req.body.createdAt || Date.now(),
      updatedAt: req.body.updatedAt || Date.now(),
      id_com: req.body.id_com,
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
        message: 'Error updating Reunion with id: ' + id,
      })
    })
}

// Delete a categorie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Reunion.destroy({
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
        message: 'Error deleting Reunion with id: ' + id,
      })
    })
}
// Delete all categories from the database.
exports.deleteAll = (req, res) => {
  Reunion.destroy({
    where: {},
  })
    .then(() => {
      res.send({
        message: `success.`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deleting Reunion',
      })
    })
}
