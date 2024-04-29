module.exports = (sequelize, Sequelize) => {
  const Recommandation = sequelize.define('recommandation', {
    titre: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    domaine: {
      type: Sequelize.STRING,
    },
    specification: {
      type: Sequelize.STRING,
    },
    retenu: {
      type: Sequelize.STRING,
    },
    etat: {
      type: Sequelize.INTEGER,
    },
    date_ins: {
      type: Sequelize.DATE,
    },
  })
  //
  //fs
  //
  return Recommandation
}
