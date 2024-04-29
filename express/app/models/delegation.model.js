const sql = require('./db.js')
// constructor
const Delegation = function (delegation) {
  this.titre = delegation.titre
  this.population = delegation.population
  this.id_gouv = delegation.id_gouv
}
Delegation.create = (newDelegation, result) => {
  sql.query('INSERT INTO delegations SET ?', newDelegation, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }
    console.log('created delegation: ', {
      id: res.insertId,
      ...newDelegation,
    })
    result(null, { id: res.insertId, ...newDelegation })
  })
}
Delegation.findById = (id, result) => {
  sql.query(`SELECT * FROM delegations WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }
    if (res.length) {
      console.log('found delegation: ', res[0])
      result(null, res[0])
      return
    }

    result({ kind: 'not_found' }, null)
  })
}
Delegation.getAll = (titre, result) => {
  let rqt = 'SELECT * FROM delegations'
  if (titre) {
    rqt += ` WHERE titre LIKE '%${titre}%'`
  }
  sql.query(rqt, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log('delegations: ', res)
    result(null, res)
  })
}
Delegation.getAllPublished = (result) => {
  sql.query('SELECT * FROM delegations WHERE etat=1', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log('delegations: ', res)
    result(null, res)
  })
}
Delegation.updateById = (id, delegationValue, result) => {
  sql.query(
    'UPDATE delegations SET titre = ?, population = ? ,id_gouv = ?  WHERE id = ?',
    [
      delegationValue.titre,
      delegationValue.population,
      delegationValue.id_gouv,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log('error: ', err)
        result(null, err)
        return
      }
      if (res.affectedRows == 0) {
        result({ kind: 'not_found' }, null)
        return
      }
      console.log('updated delegation: ', { id: id, ...delegationValue })
      result(null, { id: id, ...delegationValue })
    }
  )
}
Delegation.remove = (id, result) => {
  sql.query('DELETE FROM delegations WHERE id = ?', id, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    if (res.affectedRows == 0) {
      result({ kind: 'not_found' }, null)
      return
    }
    console.log('deleted delegation with id: ', id)
    result(null, res)
  })
}
Delegation.removeAll = (result) => {
  sql.query('DELETE FROM delegations', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log(`deleted ${res.affectedRows} delegations`)
    result(null, res)
  })
}
module.exports = Delegation
