from frame import db
from flask_login import UserMixin
from sqlalchemy.sql import func


class analystes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    diplome = db.Column(db.String(15)) 
    specialite = db.Column(db.String(15)) 
    createdAt = db.Column(db.DateTime(timezone=True), default=func.now()) 
    mission = db.Column(db.String(15))
    updatedAt = db.Column(db.DateTime(timezone=True), default=func.now())
    def __init__(self, diplome, specialite, createdAt, mission, updatedAt):
 
        self.diplome = diplome
        self.specialite = specialite
        self.createdAt = createdAt
        self.mission = mission
        self.updatedAt = updatedAt

        
       