const db = require('../models')
const Fournisseur = db.fournisseur

// Create and Save a new categorie
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  // Save Categorie in the database
  Fournisseur.create({
    raison_sociale: req.body.raison_sociale,
    MF: req.body.MF,
    registre_c: req.body.registre_c,
    nb_vehicule: req.body.nb_vehicule,
  
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving fournisseurs',
      })
    })
}

// Retrieve all categories from the database (with condition).
exports.findAll = (req, res) => {
  Fournisseur.findAll()
    .then((fournisseur) => {
      if (fournisseur) {
        res.send(fournisseur)
      } else {
        res.status(404).send({
          message: `Cannot find fournisseurs.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving fournisseurs',
      })
    })
}

// Find a single categorie with a id
exports.findOne = (req, res) => {
  const id = req.params.id
  Fournisseur.findByPk(id)
    .then((fournisseur) => {
      if (fournisseur) {
        res.send(fournisseur)
      } else {
        res.status(404).send({
          message: `Cannot find fournisseur with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving fournisseur with id: ' + id,
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
  Fournisseur.update(
    {
      raison_sociale: req.body.raison_sociale,
      MF: req.body.MF,
      registre_c: req.body.registre_c,
      nb_vehicule: req.body.nb_vehicule,
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
        message: 'Error updating fournisseur with id: ' + id,
      })
    })
}

// Delete a categorie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Fournisseur.destroy({
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
        message: 'Error deleting fournisseur with id: ' + id,
      })
    })
}
// Delete all categories from the database.
exports.deleteAll = (req, res) => {
  Fournisseur.destroy({
    where: {},
  })
    .then(() => {
      res.send({
        message: `success.`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deleting fournisseurs',
      })
    })
}
