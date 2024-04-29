module.exports = (sequelize, Sequelize) => {
  const Responsable_hop = sequelize.define('gestionnaire_hopitals', {
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
    id_hop: {
      type: Sequelize.INTEGER,
    },
    etat: {
      type: Sequelize.INTEGER,
    },
  })
  //
  //fs
  //
  return Responsable_hop
}
