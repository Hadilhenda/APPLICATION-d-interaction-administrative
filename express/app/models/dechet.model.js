module.exports = (sequelize, Sequelize) => {
  const Dechet = sequelize.define('dechet', {
    titre: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    quantite: {
      type: Sequelize.STRING,
    },
    date_urgence: {
      type: Sequelize.DATE,
    },
    date_elv: {
      type: Sequelize.DATE,
    },
    etat: {
      type: Sequelize.INTEGER,
    },
    id_com: {
      type: Sequelize.INTEGER,
    },
    id_hop: {
      type: Sequelize.INTEGER,
    },
  })
  //
  //fs
  //
  return Dechet
}
