from frame import db
from flask_login import UserMixin
from sqlalchemy.sql import func

class communes(db.Model):    
    id = db.Column(db.Integer, primary_key=True)  
    nb_departement = db.Column(db.String(150))
    tel = db.Column(db.Integer) 
    email = db.Column(db.String(150), unique=True) 
  

    def __init__(self, nb_departement, tel, email):
 
        self.nb_departement = nb_departement
        self.tel = tel
        self.email = email
          