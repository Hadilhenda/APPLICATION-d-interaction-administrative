const Gouvernorat = require('../models/gouvernorat.model.js')

exports.create = (req, res) => {
 
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
 
  const gouvernorat = new Gouvernorat({
    image: req.body.image,
    gouvern: req.body.gouvern,
    code: req.body.code,
    creation: req.body.creation,
    population: req.body.population,
    superficie: req.body.superficie,
    delegation: req.body.delegation,
    municipalite: req.body.municipalite,
    imadas: req.body.imadas,
    note: req.body.note,
  })
  // Save analyste in the database
  Gouvernorat.create(gouvernorat, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the analyste.',
      })
    else res.send(data)
  })
}

exports.findAll = (req, res) => {
  const diplome = req.query.diplome
  Gouvernorat.getAll(diplome, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving gouvernorat.',
      })
    else res.send(data)
  })
}

exports.findOne = (req, res) => {
  Gouvernorat.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found gouvernorat with id ${req.params.id}.`,
        })
      } else {
        res.status(500).send({
          message: 'Error retrieving gouvernorat with id ' + req.params.id,
        })
      }
    } else res.send(data)
  })
}
// find all published recommandations
exports.findAllPublished = (req, res) => {
  Gouvernorat.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving gouvernorat.',
      })
    else res.send(data)
  })
}
// Update a recommandation identified by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  console.log(req.body)
  Gouvernorat.updateById(
    req.params.id,
    new Gouvernorat(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Not found gouvernorat with id ${req.params.id}.`,
          })
        } else {
          res.status(500).send({
            message: 'Error updating gouvernorat with id ' + req.params.id,
          })
        }
      } else res.send(data)
    }
  )
}
// Delete a recommandation with the specified id in the request
exports.delete = (req, res) => {
  Gouvernorat.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found gouvernorat with id ${req.params.id}.`,
        })
      } else {
        res.status(500).send({
          message: 'Could not delete gouvernorat with id ' + req.params.id,
        })
      }
    } else res.send({ message: `gouvernorat was deleted successfully!` })
  })
}
// Delete all recommandations from the database.
exports.deleteAll = (req, res) => {
  Gouvernorat.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all gouvernorat.',
      })
    else res.send({ message: `All gouvernorat were deleted successfully!` })
  })
}
