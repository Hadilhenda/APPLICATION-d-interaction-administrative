const db = require('../models')
const Admin = db.admin

// Create and Save a new categorie
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  // Save Categorie in the database
  Admin.create({
    URL_domainel: req.body.URL_domainel,
    IP_adress: req.body.IP_adress,
    provid_hebarg: req.body.provid_hebarg,
    provid_sgbd: req.body.provid_sgbd,
    meta: req.body.meta,
    auteur: req.body.auteur,
    description: req.body.description,
    mot_cle: req.body.mot_cle,
  })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Agence',
      })
    })
}

// Retrieve all categories from the database (with condition).
exports.findAll = (req, res) => {
  Admin.findAll()
    .then((admin) => {
      if (admin) {
        res.send(admin)
      } else {
        res.status(404).send({
          message: `Cannot find Admin.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Admin',
      })
    })
}

// Find a single categorie with a id
exports.findOne = (req, res) => {
  const id = req.params.id
  Admin.findByPk(id)
    .then((admin) => {
      if (admin) {
        res.send(admin)
      } else {
        res.status(404).send({
          message: `Cannot find Admin with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Admin with id: ' + id,
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
  Admin.update(
    {
      URL_domainel: req.body.URL_domainel,
      IP_adress: req.body.IP_adress,
      provid_hebarg: req.body.provid_hebarg,
      provid_sgbd: req.body.provid_sgbd,
      meta: req.body.meta,
      auteur: req.body.auteur,
      description: req.body.description,
      mot_cle: req.body.mot_cle,
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
        message: 'Error updating Admin with id: ' + id,
      })
    })
}

// Delete a categorie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Admin.destroy({
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
        message: 'Error deleting Admin with id: ' + id,
      })
    })
}
// Delete all categories from the database.
exports.deleteAll = (req, res) => {
  Admin.destroy({
    where: {},
  })
    .then(() => {
      res.send({
        message: `success.`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deleting Admin',
      })
    })
}
