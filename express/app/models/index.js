const config = require('../config/db.config.js')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
})
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.user = require('../models/user.model.js')(sequelize, Sequelize)
db.citoyen = require('../models/citoyen.model.js')(sequelize, Sequelize)

db.analyste = require('../models/analyste.model.js')(sequelize, Sequelize)
db.hopital = require('../models/hopital.model.js')(sequelize, Sequelize)
db.responsable_hop = require('../models/responsable_hop.model.js')(
  sequelize,
  Sequelize
)
db.notifications = require('../models/notifications.model.js')(
  sequelize,
  Sequelize
)
db.dechet = require('../models/dechet.model.js')(sequelize, Sequelize)
db.reunion = require('../models/reunion.model.js')(sequelize, Sequelize)
db.participe = require('../models/participe.model.js')(sequelize, Sequelize)
db.responsable_mun = require('../models/responsable_mun.model.js')(
  sequelize,
  Sequelize
)
db.reclamation = require('../models/reclamation.model.js')(sequelize, Sequelize)

db.admin = require('../models/admin.model.js')(sequelize, Sequelize)

db.agence = require('../models/agence.model.js')(sequelize, Sequelize)

db.municipalite = require('../models/municipalite.model.js')(
  sequelize,
  Sequelize
)
db.recommandation = require('../models/recommandation.model.js')(
  sequelize,
  Sequelize
)
db.role = require('../models/role.model.js')(sequelize, Sequelize)
db.refreshToken = require('../models/refreshToken.model.js')(
  sequelize,
  Sequelize
)

db.role.belongsToMany(db.user, {
  through: 'user_roles',
  foreignKey: 'roleId',
  otherKey: 'userId',
})

db.user.belongsToMany(db.role, {
  through: 'user_roles',
  foreignKey: 'userId',
  otherKey: 'roleId',
})

db.ROLES = [
  'user',
  'admin',
  'analyste',
  'responsable_agences',
  'gestionnaire_hopitals',
]

//Sequelize hasOne Join association 1user ------avoir------- 1Token

db.user.hasOne(db.responsable_hop, {
  foreignKey: 'userId',
  targetKey: 'id',
})
db.responsable_hop.belongsTo(db.user, {
  foreignKey: 'userId',
  targetKey: 'id',
})

//Sequelize hasMany Join association 1user ------avoir------- *produit

db.municipalite.hasMany(db.reunion, {
  as: 'Reunion',
  foreignKey: 'id_com',
})
db.reunion.belongsTo(db.municipalite, { foreignKey: 'id_com' })

module.exports = db

/*
After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:

create a new User: create(object)
find a User by id: findByPk(id)
find a User by email: findOne({ where: { email: ... } })
get all Users: findAll()
find all Users by username: findAll({ where: { username: ... } })
*/
