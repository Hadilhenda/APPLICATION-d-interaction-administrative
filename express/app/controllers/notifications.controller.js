const db = require('../models')
const Notifier = db.notifications
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
  Notifier.create(req.body)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Notifier',
      })
    })
}

exports.findAll = async (req, res) => {
  const id = req.params.id
  const data = await sql
    .query(
      `SELECT notifications.id, notifications.action, notifications.citoyen, notifications.createdAt, notifications.sender as idHop, users.nom, users.prenom FROM notifications, users where users.id = notifications.sender and notifications.reciver = ${id}`
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
  Notifier.findByPk(id)
    .then((notifier) => {
      if (notifier) {
        res.send(notifier)
      } else {
        res.status(404).send({
          message: `Cannot find Notifier with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Notifier with id: ' + id,
      })
    })
}

// Update a categorie identified by the id in the request
// exports.update = (req, res) => {
//   if (!req.body) {
//     res.status(400).send({
//       message: 'Content can not be empty!',
//     })
//   }
//   const id = req.params.id
//   Notifier.update(
//     {
//       titre: req.body.titre,
//       description: req.body.description,
//       date: req.body.date,
//       createdAt: req.body.createdAt || Date.now(),
//       updatedAt: req.body.updatedAt || Date.now(),
//     },
//     {
//       where: {
//         id: id,
//       },
//     }
//   )
//     .then(() => {
//       res.send({
//         message: `success.`,
//       })
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: 'Error updating Notifier with id: ' + id,
//       })
//     })
// }

// Delete a categorie with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  Notifier.destroy({
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
        message: 'Error deleting Notifier with id: ' + id,
      })
    })
}
// Delete all categories from the database.
exports.deleteAll = (req, res) => {
  Notifier.destroy({
    where: {},
  })
    .then(() => {
      res.send({
        message: `success.`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error deleting Notifier',
      })
    })
}
