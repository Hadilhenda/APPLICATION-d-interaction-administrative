from frame import db
from flask_login import UserMixin
from sqlalchemy.sql import func

class hopitals (db.Model, UserMixin):    
    id = db.Column(db.Integer, primary_key=True)  
   
    tel = db.Column(db.Integer)
    email = db.Column(db.String(150), unique=True)    
   

    def __init__(self, tel, email):
 
        self.tel = tel
        self.email = email
      