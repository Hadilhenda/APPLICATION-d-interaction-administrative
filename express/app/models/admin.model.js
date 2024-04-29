module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define('admin', {
    URL_domainel: {
      type: Sequelize.STRING,
    },
    IP_adress: {
      type: Sequelize.STRING,
    },
    provid_hebarg: {
      type: Sequelize.STRING,
    },
    provid_sgbd: {
      type: Sequelize.STRING,
    },
    meta: {
      type: Sequelize.STRING,
    },
    auteur: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    mot_cle: {
      type: Sequelize.STRING,
    },
  })

  return Admin
}
