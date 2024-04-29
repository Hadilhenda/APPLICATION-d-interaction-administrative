#start importation 
from flask import  render_template, request, redirect, url_for, Blueprint,flash
from flask_login import login_required, current_user
from frame import db
from ..models.citoyens import citoyens
import datetime
citoyen = Blueprint('citoyen', __name__)

@citoyen.route('/citoyen/list')
@login_required
def list_citoyen():
    citoyenss = citoyens.query.all()
    return render_template("citoyen.html", citoyens = citoyenss, user=current_user)

@citoyen.route('/view_addcitoyen', methods = ['GET'])
@login_required
def view_addcitoyen():
    return render_template("addcitoyen.html", user=current_user)
    

@citoyen.route('/save_addcitoyen', methods = ['POST'])
@login_required
def save_addcitoyen():    
    #default input
    now = datetime.datetime.now()
    date_naissance = now.strftime(" %y/%m/%d ")
    #citoyenuperation inputs from formulaire
    inputs = request.form
    nom = inputs['nom']
    prenom = inputs['prenom']
    nom_pere= inputs['nom_pere']
    nom_mere= inputs['nom_mere']
    adress_naissance= inputs['adress_naissance'] 
    sexe= inputs['sexe']
    remarque= inputs['remarque']
    date_mort= inputs['date_mort']
    etat= inputs['etat']  
    cause_mort= inputs['cause_mort']  
    #Insert
    instance = citoyens(nom, prenom, nom_pere,nom_mere,date_naissance, adress_naissance, sexe, remarque, date_mort, etat,cause_mort)
    db.session.add(instance)
    db.session.commit()
    #flash
    flash("citoyen Inserted Successfully")
    #Redicitoyent
    return redirect(url_for('citoyen.list_citoyen'))

@citoyen.route('/view_editcitoyen',methods = ['GET'])
@login_required
def view_editcitoyen():
    citoyen = citoyens.query.get(request.args.get('id'))
    return render_template("editcitoyen.html", citoyen = citoyen, user=current_user) 

@citoyen.route('/save_editcitoyen', methods = ['POST'])
@login_required
def save_editcitoyen():
    inputs = request.form
    fupdate = citoyens.query.get(inputs['id'])
    fupdate.nom              = inputs['nom']
    fupdate.prenom           = inputs['prenom']
    fupdate.nom_pere         = inputs['nom_pere']
    fupdate.nom_mere         = inputs['nom_mere']
    fupdate.adress_naissance  = inputs['adress_naissance']   
    fupdate.sexe              = inputs['sexe']
    fupdate.remarque          = inputs['remarque']
    fupdate.date_mort          = inputs['date_mort']
    fupdate.etat          = inputs['etat'] 
    fupdate.cause_mort          = inputs['cause_mort']
    db.session.commit()
    flash("citoyen Updated Successfully")
    return redirect(url_for('citoyen.list_citoyen'))
 
@citoyen.route('/citoyen/delete/<int:id>')
@login_required
def delete_citoyen(id):
    shit = citoyens.query.get(id)
    db.session.delete(shit)
    db.session.commit()
    flash("citoyen Deleted Successfully")
    return redirect(url_for('citoyen.list_citoyen'))
    

  

    