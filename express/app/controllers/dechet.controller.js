const db = require('../models')
const Dechet = db.dechet
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
  Dechet.create(req.body)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Dechet',
      })
    })
}

// Retrieve all categories from the database (with condition).
exports.findAll = (req, res) => {
  const { titre } = req.query
  let condition = titre ? { titre: { [Op.like]: `%${titre}%` } } : null
  Dechet.findAll({ where: condition })
    .then((dechet) => {
      if (dechet) {
        res.send(dechet)
      } else {
        res.status(404).send({
          message: `Cannot find dechet.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving dechet',
      })
    })
}

// Find a single categorie with a id
exports.findOne = (req, res) => {
  const id = req.params.id
  Dechet.findByPk(id)
    .then((dechet) => {
      if (dechet) {
        res.send(dechet)
      } else {
        res.status(404).send({
          message: `Cannot find dechet with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving dechet with id: ' + id,
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
  Dechet.update(
    {
      titre: req.body.titre,
      description: req.body.description,
      quantite: req.body.quantite,
      date_urgence: req.body.date_urgence,
      date_elv: req.body.date_elv,
      etat: req.body.etat,
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
        message: 'Error updating Dechet with id: ' + id,
      })
    })
}

// Delete a categorie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Dechet.destroy({
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
        message: 'Error deleting Dechet with id: ' + id,
      })
    })
}
// Delete all categories from the database.
exports.deleteAll = (req, res) => {
  Dechet.destroy({
    where: {},
  })
    .then(() => {
      res.send({
        message: `success.`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deleting Dechet',
      })
    })
}
exports.findResp = async (req, res) => {
  const id = req.params.id
  const data = await sql
    .query(
      `SELECT dechets.id ,dechets.titre, dechets.description, dechets.quantite,dechets.date_urgence FROM dechets, users where users.id=dechets.id_com and dechets.etat = 0  and dechets.id_com=${id}`
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
