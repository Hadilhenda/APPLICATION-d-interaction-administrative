from frame import db
from flask_login import UserMixin
from sqlalchemy.sql import func

class gestionnaire_hopitals(db.Model):  
    id = db.Column(db.Integer, primary_key=True)
    diplome = db.Column(db.String(15)) 
    specialite = db.Column(db.String(15))      
    salaire = db.Column(db.Integer)
    mission = db.Column(db.String(150), unique=True)
    cv = db.Column(db.String(80))
    
   

    def __init__(self, diplome, specialite, salaire, mission, cv):
 
        self.diplome = diplome
        self.specialite = specialite
        self.salaire = salaire
        self.mission = mission
        self.cv = cv
        
        
        