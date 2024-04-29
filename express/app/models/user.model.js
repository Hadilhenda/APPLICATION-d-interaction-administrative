module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    nom: {
      type: Sequelize.STRING,
    },
    prenom: {
      type: Sequelize.STRING,
    },
    tel: {
      type: Sequelize.INTEGER,
    },
    cin: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
    },

    civil: {
      type: Sequelize.STRING,
    },
    gouvernorat: {
      type: Sequelize.STRING,
    },
    delegation: {
      type: Sequelize.STRING,
    },
    adresse: {
      type: Sequelize.STRING,
    },
    code_postal: {
      type: Sequelize.STRING,
    },
    login: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  })
  // foncton eli bech nzdouhom specifique
  return User
}
