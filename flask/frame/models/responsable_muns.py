from frame import db
from flask_login import UserMixin
from sqlalchemy.sql import func


class responsable_agences(db.Model):  
    id = db.Column(db.Integer, primary_key=True)
    tel = db.Column(db.String(15)) 
    fax = db.Column(db.String(15))      
    horaire_ouverture = db.Column(db.Integer)
    seance_nationale = db.Column(db.String(150), unique=True)
    seance_permanence = db.Column(db.String(80))
    


    def __init__(self, tel, fax, horaire_ouverture, seance_nationale, seance_permanence):
 
        self.tel = tel
        self.fax = fax
        self.horaire_ouverture = horaire_ouverture
        self.seance_nationale = seance_nationale
        self.seance_permanence = seance_permanence
        
            