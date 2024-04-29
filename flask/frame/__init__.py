from flask import Flask
from flask_sqlalchemy import SQLAlchemy 
from os import path 
from flask_login import LoginManager 
from flask_mysqldb import MySQL

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

#connexion Mysql


# Enter your database connection details below
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'homestead'

# Intialize MySQL
mysql = MySQL(app)



#connexion db 

db = SQLAlchemy()
DB_NAME = "homestead"
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root:@localhost:3306/homestead"
db.init_app(app)




#func create App get routes
def getroutes():
    from .controllers.routes import routes
    app.register_blueprint(routes,url_prefix='/')

    from .controllers.auth import auth 
    app.register_blueprint(auth,url_prefix='/') 
    
    from .controllers.user import user1 
    app.register_blueprint(user1,url_prefix='/') 

    from .controllers.hopital import hopital 
    app.register_blueprint(hopital,url_prefix='/') 

    from .controllers.municipalite import municipalite 
    app.register_blueprint(municipalite,url_prefix='/') 

    from .controllers.recommandation import recommandation 
    app.register_blueprint(recommandation,url_prefix='/')

    from .controllers.analyste import analyste 
    app.register_blueprint(analyste,url_prefix='/')

    from .controllers.citoyen import citoyen 
    app.register_blueprint(citoyen,url_prefix='/') 

    from .controllers.deces import deces 
    app.register_blueprint(deces,url_prefix='/') 

    from .controllers.responsable_mun import responsable_mun 
    app.register_blueprint(responsable_mun,url_prefix='/') 

    from .controllers.responsable_hop import responsable_hop 
    app.register_blueprint(responsable_hop,url_prefix='/') 
     
    from .controllers.gouvernorat import gouvernorat
    app.register_blueprint(gouvernorat,url_prefix='/') 


    from .api.api_recommandation import api_recommandations
    app.register_blueprint(api_recommandations, url_prefix='/')
    
    from .api.api_analyste import api_analystes
    app.register_blueprint(api_analystes, url_prefix='/')

    from .api.api_citoyen import api_citoyens
    app.register_blueprint(api_citoyens, url_prefix='/')

    from .api.api_deces import api_decess
    app.register_blueprint(api_decess, url_prefix='/')

    from .api.api_hopital import api_hopitals
    app.register_blueprint(api_hopitals, url_prefix='/')

    from .api.api_municipalite import api_municipalites
    app.register_blueprint(api_municipalites, url_prefix='/')

    from .api.api_responsable_hop import api_responsable_hops
    app.register_blueprint(api_responsable_hops, url_prefix='/')

    from .api.api_responsable_mun import api_responsable_muns
    app.register_blueprint(api_responsable_muns, url_prefix='/')

    from .api.api_gouvernorat import api_gouvernorats
    app.register_blueprint(api_gouvernorats, url_prefix='/')


    from .models.user import user 
    from .models.recommandations import recommandations 
    from .models.analystes import analystes
    from .models.citoyens import citoyens 
    from .models.decess import decess 
    from .models.hopitals import hopitals
    from .models.municipalites import communes
    from .models.gouvernorat import gouvernorats
    from .models.responsable_hops import gestionnaire_hopitals
    from .models.responsable_muns import responsable_agences
    login_manager = LoginManager()
    #interface  login_view
    #la class qui assure la connexion auth.login
    #initialisation de login manager pour notre application app instance of flask 
    # user load dans 
    login_manager.login_view ='auth.login'
    login_manager.init_app(app)
    @login_manager.user_loader 
    def load_user(id):
        return user.query.get(int(id))


    return app 

    
#def create_database(app):
 #   if not path.exists('frame/'+DB_NAME):
  #      db.create_all(app=app)
   #     print('create data base !')    