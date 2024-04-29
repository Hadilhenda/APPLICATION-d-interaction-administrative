module.exports = (sequelize, Sequelize) => {
  const Hopital = sequelize.define('hopitau', {
    libelle: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    adress: {
      type: Sequelize.STRING,
    },
    tel: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
    },
    num_urgence: {
      type: Sequelize.INTEGER,
    },
    langitude: {
      type: Sequelize.INTEGER,
    },
    latitude: {
      type: Sequelize.INTEGER,
    },
    PDG: {
      type: Sequelize.STRING,
    },
    web_site: {
      type: Sequelize.STRING,
    },
    id_age: {
      type: Sequelize.INTEGER,
    },
  })
  //
  //fs
  //
  return Hopital
}
