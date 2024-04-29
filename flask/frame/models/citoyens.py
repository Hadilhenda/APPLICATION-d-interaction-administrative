from frame import db
from flask_login import UserMixin
from sqlalchemy.sql import func


class citoyens(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    nom = db.Column(db.String(15)) 
    prenom = db.Column(db.String(15)) 
    nom_pere = db.Column(db.String(20)) 
    nom_mere = db.Column(db.String(20))  
    date_naissance = db.Column(db.DateTime(timezone=True), default=func.now()) 
    adress_naissance = db.Column(db.String(20)) 
    sexe = db.Column(db.String(5)) 
    remarque = db.Column(db.String(20))
    date_mort = db.Column(db.DateTime(timezone=True), default=func.now())
    etat = db.Column(db.Integer) 
    cause_mort = db.Column(db.String(20))
    
    


    def __init__(self, nom, prenom, nom_pere, nom_mere, date_naissance, adress_naissance, sexe, remarque, date_mort,etat,cause_mort):
 
        self.nom = nom
        self.prenom = prenom
        self.nom_pere = nom_pere
        self.nom_mere = nom_mere 
        self.date_naissance = date_naissance 
        self.adress_naissance = adress_naissance
        self.sexe = sexe
        self.remarque = remarque
        self.date_mort = date_mort
        self.etat = etat  
        self.cause_mort = cause_mort


