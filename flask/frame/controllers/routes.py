from flask import  render_template, Blueprint
from flask_login import login_required, current_user
from frame import db
from ..models.citoyens import citoyens
routes = Blueprint('routes', __name__)
@routes.route('/')
def index():
   return render_template("acc.html")

@routes.route('/home')
@login_required
def home():

   Jan = db.session.query(citoyens).filter(citoyens.date_naissance.like('%-01-%')).count()
   Fev = db.session.query(citoyens).filter(citoyens.date_naissance.like('%-02-%')).count()
   Mars = db.session.query(citoyens).filter(citoyens.date_naissance.like('%-03-%')).count()
   Avr = db.session.query(citoyens).filter(citoyens.date_naissance.like('%-04-%')).count()
   Mai = db.session.query(citoyens).filter(citoyens.date_naissance.like('%-05-%')).count()
   Juin = db.session.query(citoyens).filter(citoyens.date_naissance.like('%-06-%')).count()
   Juil = db.session.query(citoyens).filter(citoyens.date_naissance.like('%-07-%')).count()
   Aout = db.session.query(citoyens).filter(citoyens.date_naissance.like('%-08-%')).count()
   Sept = db.session.query(citoyens).filter(citoyens.date_naissance.like('%-09-%')).count()
   Oct = db.session.query(citoyens).filter(citoyens.date_naissance.like('%-10-%')).count()
   Nov = db.session.query(citoyens).filter(citoyens.date_naissance.like('%-11-%')).count()
   Decm = db.session.query(citoyens).filter(citoyens.date_naissance.like('%-12-%')).count()
   Jan_d = db.session.query(citoyens).filter(citoyens.date_mort.like('%-01-%')).count()
   Fev_d = db.session.query(citoyens).filter(citoyens.date_mort.like('%-02-%')).count()
   Mars_d = db.session.query(citoyens).filter(citoyens.date_mort.like('%-03-%')).count()
   Avr_d = db.session.query(citoyens).filter(citoyens.date_mort.like('%-04-%')).count()
   Mai_d = db.session.query(citoyens).filter(citoyens.date_mort.like('%-05-%')).count()
   Juin_d = db.session.query(citoyens).filter(citoyens.date_mort.like('%-06-%')).count()
   Juil_d = db.session.query(citoyens).filter(citoyens.date_mort.like('%-07-%')).count()
   Aout_d = db.session.query(citoyens).filter(citoyens.date_mort.like('%-08-%')).count()
   Sept_d = db.session.query(citoyens).filter(citoyens.date_mort.like('%-09-%')).count()
   Oct_d = db.session.query(citoyens).filter(citoyens.date_mort.like('%-10-%')).count()
   Nov_d = db.session.query(citoyens).filter(citoyens.date_mort.like('%-11-%')).count()
   Decm_d = db.session.query(citoyens).filter(citoyens.date_mort.like('%-12-%')).count()

   Naissance = db.session.query(citoyens).filter(citoyens.etat.like('1')).count()
   Deces = db.session.query(citoyens).filter(citoyens.etat.like('4')).count()
   covid = db.session.query(citoyens).filter(citoyens.cause_mort.like('%covid%')).count()
   print ('test :' ,Jan)
   return render_template("home.html", user=current_user, Jan=Jan, Fev=Fev,Mars=Mars,Avr=Avr,Mai=Mai,Juin=Juin,Juil=Juil,Aout=Aout,Sept=Sept,Oct=Oct,Nov=Nov,Decm=Decm, Jan_d=Jan_d, Fev_d=Fev_d,Mars_d=Mars_d,Avr_d=Avr_d,Mai_d=Mai_d,Juin_d=Juin_d,Juil_d=Juil_d,Aout_d=Aout_d,Sept_d=Sept_d,Oct_d=Oct_d,Nov_d=Nov_d,Decm_d=Decm_d,Naissance=Naissance,Deces=Deces,covid=covid)
