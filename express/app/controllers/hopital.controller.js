const db = require('../models')
const Hopital = db.hopital

// Create and Save a new categorie
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  // Save Categorie in the database
  Hopital.create(req.body)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Hopital',
      })
    })
}

// Retrieve all categories from the database (with condition).
exports.findAll = (req, res) => {
  Hopital.findAll()
    .then((hopital) => {
      if (hopital) {
        res.send(hopital)
      } else {
        res.status(404).send({
          message: `Cannot find hopital.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving hopital',
      })
    })
}

// Find a single categorie with a id
exports.findOne = (req, res) => {
  const id = req.params.id
  Hopital.findByPk(id)
    .then((hopital) => {
      if (hopital) {
        res.send(hopital)
      } else {
        res.status(404).send({
          message: `Cannot find hopital with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving hopital with id: ' + id,
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
  Hopital.update(
    {
      libelle: req.body.libelle,
      type: req.body.type,
      adress: req.body.adress,
      tel: req.body.tel,
      email: req.body.email,
      num_urgence: req.body.num_urgence,
      langitude: req.body.langitude,
      latitude: req.body.latitude,
      PDG: req.body.PDG,
      web_site: req.body.web_site,
      createdAt: req.body.createdAt || Date.now(),
      updatedAt: req.body.updatedAt || Date.now(),
      id_age: req.body.id_age,
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
        message: 'Error updating Hopital with id: ' + id,
      })
    })
}

// Delete a categorie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Hopital.destroy({
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
        message: 'Error deleting Hopital with id: ' + id,
      })
    })
}
// Delete all categories from the database.
exports.deleteAll = (req, res) => {
  Hopital.destroy({
    where: {},
  })
    .then(() => {
      res.send({
        message: `success.`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deleting Hopital',
      })
    })
}
