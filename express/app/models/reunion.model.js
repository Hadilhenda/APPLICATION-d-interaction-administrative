module.exports = (sequelize, Sequelize) => {
  const Reunion = sequelize.define('reunion', {
    object: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.DATE,
    },
    heure: {
      type: Sequelize.STRING,
    },
  })
  //
  //fs
  //
  return Reunion
}
