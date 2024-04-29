const db = require('../models')
const Municipalite = db.municipalite

// Create and Save a new categorie
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  // Save Categorie in the database
  Municipalite.create(req.body)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving municipalite',
      })
    })
}

// Retrieve all categories from the database (with condition).
exports.findAll = (req, res) => {
  Municipalite.findAll()
    .then((municipalite) => {
      if (municipalite) {
        res.send(municipalite)
      } else {
        res.status(404).send({
          message: `Cannot find municipalite.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving municipalite',
      })
    })
}

// Find a single categorie with a id
exports.findOne = (req, res) => {
  const id = req.params.id
  Municipalite.findByPk(id)
    .then((municipalite) => {
      if (municipalite) {
        res.send(municipalite)
      } else {
        res.status(404).send({
          message: `Cannot find Municipalite with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Municipalite with id: ' + id,
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
  Municipalite.update(
    {
      nom: req.body.nom,
      nbr_departement: req.body.nbr_departement,
      presidant: req.body.presidant,
      adress: req.body.adress,
      tel: req.body.tel,
      email: req.body.email,
      secretaire: req.body.secretaire,
      langitude: req.body.langitude,
      latitude: req.body.latitude,
      web_site: req.body.web_site,
      createdAt: req.body.createdAt || Date.now(),
      updatedAt: req.body.updatedAt || Date.now(),
      id_del: req.body.id_del,
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
        message: 'Error updating Municipalite with id: ' + id,
      })
    })
}

// Delete a categorie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Municipalite.destroy({
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
        message: 'Error deleting Municipalite with id: ' + id,
      })
    })
}
// Delete all categories from the database.
exports.deleteAll = (req, res) => {
  Municipalite.destroy({
    where: {},
  })
    .then(() => {
      res.send({
        message: `success.`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deleting Municipalite',
      })
    })
}
