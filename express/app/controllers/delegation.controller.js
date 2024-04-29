const Delegation = require('../models/delegation.model.js')

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  const delegation = new Delegation({
    titre: req.body.titre,
    population: req.body.population,
    id_gouv: req.body.id_gouv,
  })
  Delegation.create(delegation, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the delegation.',
      })
    else res.send(data)
  })
}

exports.findAll = (req, res) => {
  const titre = req.query.titre
  Delegation.getAll(titre, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving delegation.',
      })
    else res.send(data)
  })
}
// Find a single recommandation with a id
exports.findOne = (req, res) => {
  Delegation.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found delegation with id ${req.params.id}.`,
        })
      } else {
        res.status(500).send({
          message: 'Error retrieving delegation with id ' + req.params.id,
        })
      }
    } else res.send(data)
  })
}

exports.findAllPublished = (req, res) => {
  Delegation.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving delegation.',
      })
    else res.send(data)
  })
}

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  console.log(req.body)
  Delegation.updateById(
    req.params.id,
    new Delegation(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Not found delegation with id ${req.params.id}.`,
          })
        } else {
          res.status(500).send({
            message: 'Error updating delegation with id ' + req.params.id,
          })
        }
      } else res.send(data)
    }
  )
}

exports.delete = (req, res) => {
  Delegation.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found delegation with id ${req.params.id}.`,
        })
      } else {
        res.status(500).send({
          message: 'Could not delete delegation with id ' + req.params.id,
        })
      }
    } else res.send({ message: `delegation was deleted successfully!` })
  })
}

exports.deleteAll = (req, res) => {
  Delegation.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all delegation.',
      })
    else res.send({ message: `All delegation were deleted successfully!` })
  })
}
