const db = require('../models')
const Citoyen = db.citoyen
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
  Citoyen.create(req.body)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Citoyens',
      })
    })
}
exports.DecDeces = (req, res) => {
  Citoyen.findAll({ where: { etat: { [Op.eq]: 1 } } })
    .then((citoyen) => {
      if (citoyen) {
        res.send(citoyen)
      } else {
        res.status(404).send({
          message: `Cannot find citoyen.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving citoyens',
      })
    })
}
// Retrieve all categories from the database (with condition).
exports.findAll = (req, res) => {
  const { nom } = req.query
  let condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null
  Citoyen.findAll({ where: condition })
    .then((citoyen) => {
      if (citoyen) {
        res.send(citoyen)
      } else {
        res.status(404).send({
          message: `Cannot find citoyen.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving citoyens',
      })
    })
}
exports.findDecNai = (req, res) => {
  const id = req.params.id
  Citoyen.findAll({ where: { etat: { [Op.eq]: 0 }, id_Res: { [Op.eq]: id } } })
    .then((citoyen) => {
      if (citoyen) {
        res.send(citoyen)
      } else {
        res.status(404).send({
          message: `Cannot find citoyen.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving citoyens',
      })
    })
}

exports.findDecDeces = (req, res) => {
  const id = req.params.id
  Citoyen.findAll({ where: { etat: { [Op.eq]: 3 }, id_Res: { [Op.eq]: id } } })
    .then((citoyen) => {
      if (citoyen) {
        res.send(citoyen)
      } else {
        res.status(404).send({
          message: `Cannot find citoyen.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving citoyens',
      })
    })
}

// Find a single categorie with a id
exports.findOne = (req, res) => {
  const id = req.params.id
  Citoyen.findByPk(id)
    .then((citoyen) => {
      if (citoyen) {
        res.send(citoyen)
      } else {
        res.status(404).send({
          message: `Cannot find citoyen with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving citoyen with id: ' + id,
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
  Citoyen.update(
    {
      nom: req.body.nom,
      prenom: req.body.prenom,
      nom_pere: req.body.nom_pere,
      nom_mere: req.body.nom_mere,
      adress_naissance: req.body.adress_naissance,
      sexe: req.body.sexe,
      remarque: req.body.remarque,
      date_naissance: req.body.date_naissance,
      date_mort: req.body.date_mort,
      cause_mort: req.body.cause_mort,
      declaration_accouchement: req.body.declaration_accouchement,
      declaration_hopital: req.body.declaration_hopital,
      assistant_accouchement: req.body.assistant_accouchement,
      cin_pere: req.body.cin_pere,
      cin_mere: req.body.cin_mere,
      livret_familial: req.body.livret_familial,
      assistant_mort: req.body.assistant_mort,
      date_enterement: req.body.date_enterement,
      etat: req.body.etat,
      updatedAt: req.body.updatedAt || Date.now(),
      id_Res: req.body.id_Res,
      id_Hop: req.body.id_Hop,
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
        message: 'Error updating citoyen with id: ' + id,
      })
    })
}

// Delete a categorie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Citoyen.destroy({
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
        message: 'Error deleting citoyen with id: ' + id,
      })
    })
}
// Delete all categories from the database.
exports.deleteAll = (req, res) => {
  Citoyen.destroy({
    where: {},
  })
    .then(() => {
      res.send({
        message: `success.`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deleting citoyen',
      })
    })
}
exports.findResp = async (req, res) => {
  const id = req.params.id
  const data = await sql
    .query(
      `SELECT responsable_agences.id_user FROM responsable_agences, agences, hopitals, gestionnaire_hopitals  where responsable_agences.id_age = agences.id and hopitals.id_age = agences.id and gestionnaire_hopitals.id_hop = hopitals.id and gestionnaire_hopitals.id_user = ${id}`
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
