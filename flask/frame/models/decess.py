from frame import db
from flask_login import UserMixin
from sqlalchemy.sql import func

class decess(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    date_deces = db.Column(db.DateTime(timezone=True), default=func.now())
    ca_d = db.Column(db.String(15)) 
   


    def __init__(self, date_deces, ca_d):
 
        self.date_deces = date_deces
        self.ca_d = ca_d
     