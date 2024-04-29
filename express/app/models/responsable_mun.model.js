module.exports = (sequelize, Sequelize) => {
  const Responsable_mun = sequelize.define('responsable_agences', {
    diplome: {
      type: Sequelize.STRING,
    },
    specialite: {
      type: Sequelize.STRING,
    },
    mission: {
      type: Sequelize.STRING,
    },
    id_user: {
      type: Sequelize.INTEGER,
    },
    id_age: {
      type: Sequelize.INTEGER,
    },
    etat: {
      type: Sequelize.INTEGER,
    },
  })
  //
  //fs
  //
  return Responsable_mun
}

