module.exports = (sequelize, Sequelize) => {
  const Notifications = sequelize.define('notifications', {
    action: {
      type: Sequelize.STRING,
    },
    sender: {
      type: Sequelize.INTEGER,
    },
    reciver: {
      type: Sequelize.INTEGER,
    },
    citoyen: {
      type: Sequelize.INTEGER,
    },
  })
  //
  //fs
  //
  return Notifications
}
