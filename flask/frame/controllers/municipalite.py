#start importation 
from flask import  render_template, request, redirect, url_for, Blueprint,flash
from flask_login import login_required, current_user
from frame import db
from ..models.municipalites import communes

municipalite = Blueprint('municipalite', __name__)

@municipalite.route('/municipalite/list')
@login_required
def list_municipalite():
    municipalitess = communes.query.all()
    return render_template("municipalite.html", municipalites = municipalitess, user=current_user)


@municipalite.route('/view_addmunicipalite', methods = ['GET'])
@login_required
def view_addmunicipalite():
    return render_template("addmunicipalite.html", user=current_user)
    

@municipalite.route('/save_addmunicipalite', methods = ['POST'])
@login_required
def save_addmunicipalite():
    #default input
   
    #municipaliteuperation inputs from formulaire
    inputs = request.form
    nb_departement = inputs['nb_departement']
    tel = inputs['tel']
    email = inputs['email']
        
    #Insert
    instance = communes(nb_departement, tel, email)
    db.session.add(instance)
    db.session.commit()
    #flash
    flash("municipalite Inserted Successfully")
    #Redimunicipalitet
    return redirect(url_for('municipalite.list_municipalite'))
    


@municipalite.route('/view_editmunicipalite',methods = ['GET'])
@login_required
def view_editmunicipalite():

    municipalite = communes.query.get(request.args.get('id'))
    return render_template("editmunicipalite.html", municipalite = municipalite, user=current_user) 
    


@municipalite.route('/save_editmunicipalite', methods = ['POST'])
@login_required
def save_editmunicipalite():
    inputs = request.form

    fupdate = communes.query.get(inputs['id'])
    
    
    fupdate.nb_departement           = inputs['nb_departement']
    fupdate.tel           = inputs['tel']
    fupdate.email     = inputs['email']
    

    db.session.commit()
    flash("municipalite Updated Successfully")

    return redirect(url_for('municipalite.list_municipalite'))
 
@municipalite.route('/municipalite/delete/<int:id>')
@login_required
def delete_municipalite(id):
    shit = communes.query.get(id)
    db.session.delete(shit)
    db.session.commit()
    flash("municipalite Deleted Successfully")
    return redirect(url_for('municipalite.list_municipalite'))
    

  

    