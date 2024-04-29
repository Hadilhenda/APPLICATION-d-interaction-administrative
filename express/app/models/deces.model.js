const sql = require('./db.js')
// constructor
const Deces = function (deces) {
  
  this.date_deces = deces.date_deces
  this.ca_d = deces.ca_d
}
Deces.create = (newDeces, result) => {
  sql.query(
    'INSERT INTO decess SET ?',
    newDeces,
    (err, res) => {
      if (err) {
        console.log('error: ', err)
        result(err, null)
        return
      }
      console.log('created deces: ', {
        id: res.insertId,
        ...newDeces,
      })
      result(null, { id: res.insertId, ...newDeces })
    }
  )
}
Deces.findById = (id, result) => {
  sql.query(`SELECT * FROM decess WHERE id = ${ id }`,
   (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }
    if (res.length) {
      console.log('found deces: ', res[0])
      result(null, res[0])
      return
    }
    // not found recommandation with the id
    result({ kind: 'not_found' }, null)
  })
}
Deces.getAll = (nom, result) => {
  let rqt = 'SELECT * FROM decess'
  if (nom) {
    rqt += ` WHERE nom LIKE '%${nom}%'`
  }
  sql.query(rqt, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log('decess: ', res)
    result(null, res)
  })
}
Deces.getAllPublished = (result) => {
  sql.query('SELECT * FROM decess WHERE etat=1', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log('decess: ', res)
    result(null, res)
  })
}
Deces.updateById = (id, decesValue, result) => {
  sql.query(
    'UPDATE decess SET date_deces = ?, ca_d = ?   WHERE id = ?',
    [
      decesValue.date_deces,
      decesValue.ca_d,
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
      console.log('updated deces: ', { id: id, ...decesValue })
      result(null, { id: id, ...decesValue })
    }
  )
}
Deces.remove = (id, result) => {
  sql.query('DELETE FROM decess WHERE id = ?', id, (err, res) => {
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
    console.log('deleted deces with id: ', id)
    result(null, res)
  })
}
Deces.removeAll = (result) => {
  sql.query('DELETE FROM decess', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log(`deleted ${res.affectedRows} decess`)
    result(null, res)
  })
}
module.exports = Deces
