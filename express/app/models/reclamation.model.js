module.exports = (sequelize, Sequelize) => {
  const Reclamation = sequelize.define('reclamation', {
    titre: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
    localisation: {
      type: Sequelize.STRING,
    },
  })

  return Reclamation
}
