module.exports = (sequelize, Sequelize) => {
  const Analyste = sequelize.define('analyste', {
    diplome: {
      type: Sequelize.STRING,
    },
    specialite: {
      type: Sequelize.STRING,
    },
    mission: {
      type: Sequelize.STRING,
    },
  })

  return Analyste
}
