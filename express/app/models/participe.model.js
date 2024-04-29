
module.exports = (sequelize, Sequelize) => {
  const Participe = sequelize.define('participe', {
    id_user: {
      type: Sequelize.INTEGER,
    },
    id_reuni: {
      type: Sequelize.INTEGER,
    },
    date_partici: {
      type: Sequelize.DATE,
    },
  })

  return Participe
}
