module.exports = (sequelize, Sequelize) => {
  const Municipalite = sequelize.define('commune', {
    nom: {
      type: Sequelize.STRING,
    },
    tel: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
    },
    nbr_departement: {
      type: Sequelize.INTEGER,
    },
    presidant: {
      type: Sequelize.STRING,
    },
    secretaire: {
      type: Sequelize.STRING,
    },
    adress: {
      type: Sequelize.STRING,
    },
    langitude: {
      type: Sequelize.INTEGER,
    },
    latitude: {
      type: Sequelize.INTEGER,
    },
    web_site: {
      type: Sequelize.STRING,
    },
    id_del: {
      type: Sequelize.INTEGER,
    },
  })
  //
  //fs
  //
  return Municipalite
}
