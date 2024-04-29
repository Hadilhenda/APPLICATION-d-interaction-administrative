#start importation 
from flask import  render_template, request, redirect, url_for, Blueprint,flash
from flask_login import login_required, current_user
from frame import db
from ..models.responsable_hops import gestionnaire_hopitals

responsable_hop = Blueprint('responsable_hop', __name__)

@responsable_hop.route('/responsable_hop/list')
@login_required
def list_responsable_hop():
    responsable_hopss = gestionnaire_hopitals.query.all()
    return render_template("responsable_hop.html", responsable_hops = responsable_hopss, user=current_user)


@responsable_hop.route('/view_addresponsable_hop', methods = ['GET'])
@login_required
def view_addresponsable_hop():
    return render_template("addresponsable_hop.html", user=current_user)
    

@responsable_hop.route('/save_addresponsable_hop', methods = ['POST'])
@login_required
def save_addresponsable_hop():
    #default input

    
    #responsable_hopuperation inputs from formulaire
    inputs = request.form
    diplome = inputs['diplome']
    specialite = inputs['specialite']
    salaire= inputs['salaire']
    mission= inputs['mission']
    cv= inputs['cv']
    
    #Insert
    instance = gestionnaire_hopitals(diplome, specialite, salaire, mission, cv)
    db.session.add(instance)
    db.session.commit()
    #flash
    flash("responsable_hop Inserted Successfully")
    #Rediresponsable_hopt
    return redirect(url_for('responsable_hop.list_responsable_hop'))
    


@responsable_hop.route('/view_editresponsable_hop',methods = ['GET'])
@login_required
def view_editresponsable_hop():

    responsable_hop = gestionnaire_hopitals.query.get(request.args.get('id'))
    return render_template("editresponsable_hop.html", responsable_hop = responsable_hop, user=current_user) 
    


@responsable_hop.route('/save_editresponsable_hop', methods = ['POST'])
@login_required
def save_editresponsable_hop():
    inputs = request.form

    fupdate = gestionnaire_hopitals.query.get(inputs['id'])
    
    
    fupdate.diplome           = inputs['diplome']
    fupdate.specialite     = inputs['specialite']
    fupdate.salaire         = inputs['salaire']
    fupdate.mission         = inputs['mission']
    fupdate.cv         = inputs['cv']
    

    db.session.commit()
    flash("responsable_hop Updated Successfully")

    return redirect(url_for('responsable_hop.list_responsable_hop'))
 
@responsable_hop.route('/responsable_hop/delete/<int:id>')
@login_required
def delete_responsable_hop(id):
    shit = gestionnaire_hopitals.query.get(id)
    db.session.delete(shit)
    db.session.commit()
    flash("responsable_hop Deleted Successfully")
    return redirect(url_for('responsable_hop.list_responsable_hop'))
    

  

    