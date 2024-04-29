module.exports = (sequelize, Sequelize) => {
  const Citoyen = sequelize.define('citoyen', {
    nom: {
      type: Sequelize.STRING,
    },
    prenom: {
      type: Sequelize.STRING,
    },
    nom_pere: {
      type: Sequelize.STRING,
    },
    nom_mere: {
      type: Sequelize.STRING,
    },
    adress_naissance: {
      type: Sequelize.STRING,
    },
    sexe: {
      type: Sequelize.STRING,
    },
    remarque: {
      type: Sequelize.STRING,
    },
    date_naissance: {
      type: Sequelize.DATE,
    },
    date_mort: {
      type: Sequelize.DATE,
    },
    cause_mort: {
      type: Sequelize.STRING,
    },
    declaration_accouchement: {
      type: Sequelize.STRING,
    },
    declaration_hopital: {
      type: Sequelize.STRING,
    },
    assistant_accouchement: {
      type: Sequelize.STRING,
    },
    cin_pere: {
      type: Sequelize.INTEGER,
    },
    cin_mere: {
      type: Sequelize.INTEGER,
    },
    livret_familial: {
      type: Sequelize.STRING,
    },
    assistant_mort: {
      type: Sequelize.STRING,
    },
    date_enterement: {
      type: Sequelize.DATE,
    },
    etat: {
      type: Sequelize.INTEGER,
    },
    id_Res: {
      type: Sequelize.INTEGER,
    },
    id_Hop: {
      type: Sequelize.INTEGER,
    },
  })
  return Citoyen
}
