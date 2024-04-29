from frame import db
from flask_login import UserMixin
from sqlalchemy.sql import func


class gouvernorats(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(15)) 
    gouvern = db.Column(db.String(15)) 
    code = db.Column(db.String(15)) 
    creation = db.Column(db.String(15))
    population=db.Column(db.Integer) 
    superficie = db.Column(db.Integer)  
    delegation= db.Column(db.Integer) 
    municipalite=db.Column(db.Integer) 
    imadas = db.Column(db.Integer) 
    note = db.Column(db.String(15))
    def __init__(self, image, gouvern, code, creation,population,superficie,delegation,municipalite,imadas, note):
 
        self.image = image
        self.gouvern = gouvern
        self.code = code
        self.creation = creation
        self.population = population
        self.superficie = superficie
        self.delegation = delegation
        self.municipalite = municipalite
        self.imadas = imadas
        self.note = note

        
       