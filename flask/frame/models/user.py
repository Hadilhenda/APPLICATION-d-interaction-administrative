from frame import db
from flask_login import UserMixin
from sqlalchemy.sql import func

class user(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    nom = db.Column(db.String(150))
    prenom = db.Column(db.String(150))
    tel = db.Column(db.Integer)
    email = db.Column(db.String(150))
    login = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    profil = db.Column(db.Integer)
    permissions = db.Column(db.Integer)
    etat = db.Column(db.Integer)
    date_ins = db.Column(db.DateTime(timezone=True), default=func.now())
    
    def __init__(self, nom, prenom, tel, email, login, password, profil, permissions, etat):

        self.nom = nom
        self.prenom = prenom
        self.tel = tel
        self.email = email
        self.login = login
        self.password = password
        self.profil = profil
        self.permissions = permissions
        self.etat = etat
        