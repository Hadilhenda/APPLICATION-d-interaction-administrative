const sql = require('./db.js')
// constructor
const User = function (users) {
  this.nom = users.nom
  this.prenom = users.prenom
  ;(this.tel = users.tel),
    (this.email = users.email),
    (this.adresse = users.adresse),
    (this.cpostal = users.cpostal),
    (this.gouvernorat = users.gouvernorat),
    (this.login = users.login),
    (this.password = users.password),
    (this.profil = users.profil),
    (this.date_ins = users.date_ins || Date.now()),
    (this.date_upd = users.date_upd || Date.now()),
    (this.etat = users.etat)
}
User.create = (newUser, result) => {
  sql.query('INSERT INTO user SET ?', newUser, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }
    console.log('created user: ', {
      id: res.insertId,
      ...newUser,
    })
    result(null, { id: res.insertId, ...newUser })
  })
}
User.findById = (id, result) => {
  sql.query(`SELECT * FROM user WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }
    if (res.length) {
      console.log('found user: ', res[0])
      result(null, res[0])
      return
    }
    // not found recommandation with the id
    result({ kind: 'not_found' }, null)
  })
}
User.getAll = (nom, result) => {
  let rqt = 'SELECT * FROM user'
  if (nom) {
    rqt += ` WHERE nom LIKE '%${nom}%'`
  }
  sql.query(rqt, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log('user: ', res)
    result(null, res)
  })
}
User.getAllPublished = (result) => {
  sql.query('SELECT * FROM user WHERE etat=1', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log('user: ', res)
    result(null, res)
  })
}
User.updateById = (id, userValue, result) => {
  sql.query(
    'UPDATE user SET nom = ?, prenom = ? ,tel = ? , email = ?,adresse = ? , cpostal = ? ,gouvernorat = ?,login = ? , password = ?,profil = ?  ,date_ins = ?, date_upd = ? ,etat = ? WHERE id = ?',
    [
      userValue.nom,
      userValue.prenom,
      userValue.tel,
      userValue.email,
      userValue.adresse,
      userValue.cpostal,
      userValue.gouvernorat,
      userValue.login,
      userValue.password,
      userValue.profil,
      userValue.date_ins,
      userValue.date_upd,
      userValue.etat,
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
      console.log('updated user: ', { id: id, ...userValue })
      result(null, { id: id, ...userValue })
    }
  )
}
User.remove = (id, result) => {
  sql.query('DELETE FROM user WHERE id = ?', id, (err, res) => {
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
    console.log('deleted user with id: ', id)
    result(null, res)
  })
}
User.removeAll = (result) => {
  sql.query('DELETE FROM user', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log(`deleted ${res.affectedRows} user`)
    result(null, res)
  })
}
module.exports = User
