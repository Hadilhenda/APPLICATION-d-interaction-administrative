module.exports = (sequelize, Sequelize) => {
  const Agence = sequelize.define('agence', {
    nom: {
      type: Sequelize.STRING,
    },
    tel: {
      type: Sequelize.INTEGER,
    },
    fax: {
      type: Sequelize.INTEGER,
    },
    horaire_ouverture: {
      type: Sequelize.STRING,
    },
    seance_nationale: {
      type: Sequelize.STRING,
    },
    seance_permanence: {
      type: Sequelize.STRING,
    },
    id_com: {
      type: Sequelize.INTEGER,
    },
  })

  return Agence
}
