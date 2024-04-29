const sql = require('./db.js')
// constructor
const Gouvernorat = function (gouvernorat) {
  this.image = gouvernorat.image
  this.gouvern = gouvernorat.gouvern
  this.code = gouvernorat.code
  this.creation = gouvernorat.creation
  this.population = gouvernorat.population
  this.superficie = gouvernorat.superficie
  this.delegation = gouvernorat.delegation
  this.municipalite = gouvernorat.municipalite
  this.imadas = gouvernorat.imadas
  this.note = gouvernorat.note
}
Gouvernorat.create = (newGouvernorat, result) => {
  sql.query('INSERT INTO gouvernorats SET ?', newGouvernorat, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }
    console.log('created gouvernorat: ', {
      id: res.insertId,
      ...newGouvernorat,
    })
    result(null, { id: res.insertId, ...newGouvernorat })
  })
}
Gouvernorat.findById = (id, result) => {
  sql.query(`SELECT * FROM gouvernorats WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }
    if (res.length) {
      console.log('found Gouvernorat: ', res[0])
      result(null, res[0])
      return
    }

    result({ kind: 'not_found' }, null)
  })
}
Gouvernorat.getAll = (diplome, result) => {
  let rqt = 'SELECT * FROM gouvernorats'
  if (diplome) {
    rqt += ` WHERE diplome LIKE '%${diplome}%'`
  }
  sql.query(rqt, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log('gouvernorats: ', res)
    result(null, res)
  })
}
Gouvernorat.getAllPublished = (result) => {
  sql.query('SELECT * FROM gouvernorats WHERE etat=1', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log('gouvernorats: ', res)
    result(null, res)
  })
}
Gouvernorat.updateById = (id, gouvernoratValue, result) => {
  sql.query(
    'UPDATE gouvernorats SET image = ?, gouvern = ? ,code = ? , creation = ? , population = ?,superficie = ?, delegation = ? ,municipalite = ? , imadas = ? , note = ? WHERE id = ?',
    [
      gouvernoratValue.image,
      gouvernoratValue.gouvern,
      gouvernoratValue.code,
      gouvernoratValue.creation,
      gouvernoratValue.population,
      gouvernoratValue.superficie,
      gouvernoratValue.delegation,
      gouvernoratValue.municipalite,
      gouvernoratValue.imadas,
      gouvernoratValue.note,

      id,
    ],
    (err, res) => {
      if (err) {
        console.log('error: ', err)
        result(null, err)
        return
      }
      if (res.affectedRows == 0) {
        // not found recommandation with the id
        result({ kind: 'not_found' }, null)
        return
      }
      console.log('updated Gouvernorat: ', { id: id, ...gouvernoratValue })
      result(null, { id: id, ...gouvernoratValue })
    }
  )
}
Gouvernorat.remove = (id, result) => {
  sql.query('DELETE FROM gouvernorats WHERE id = ?', id, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    if (res.affectedRows == 0) {
      // not found recommandation with the id
      result({ kind: 'not_found' }, null)
      return
    }
    console.log('deleted gouvernorat with id: ', id)
    result(null, res)
  })
}
Gouvernorat.removeAll = (result) => {
  sql.query('DELETE FROM gouvernorats', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log(`deleted ${res.affectedRows} gouvernorats`)
    result(null, res)
  })
}
module.exports = Gouvernorat
