module.exports = (sequelize, Sequelize) => {
  const Fournisseur = sequelize.define('fournisseur', {
    raison_sociale: {
      type: Sequelize.STRING,
    },
    MF: {
      type: Sequelize.INTEGER,
    },
    registre_c: {
      type: Sequelize.INTEGER,
    },
    nb_vehicule: {
      type: Sequelize.STRING,
    },
  })
  //
  //fs
  //
  return Fournisseur
}
