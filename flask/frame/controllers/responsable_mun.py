#start importation 
from flask import  render_template, request, redirect, url_for, Blueprint,flash
from flask_login import login_required, current_user
from frame import db
from ..models.responsable_muns import responsable_agences

responsable_mun = Blueprint('responsable_mun', __name__)

@responsable_mun.route('/responsable_mun/list')
@login_required
def list_responsable_mun():
    responsable_munss = responsable_agences.query.all()
    return render_template("responsable_mun.html", responsable_muns = responsable_munss, user=current_user)


@responsable_mun.route('/view_addresponsable_mun', methods = ['GET'])
@login_required
def view_addresponsable_mun():
    return render_template("addresponsable_mun.html", user=current_user)
    

@responsable_mun.route('/save_addresponsable_mun', methods = ['POST'])
@login_required
def save_addresponsable_mun():
    
    inputs = request.form
    tel = inputs['tel']
    fax = inputs['fax']
    horaire_ouverture= inputs['horaire_ouverture']
    seance_nationale= inputs['seance_nationale']
    seance_permanence= inputs['seance_permanence']
   
    #Insert
    instance = responsable_agences(tel, fax, horaire_ouverture, seance_nationale, seance_permanence)
    db.session.add(instance)
    db.session.commit()
    #flash
    flash("responsable_mun Inserted Successfully")
    #Rediresponsable_munt
    return redirect(url_for('responsable_mun.list_responsable_mun'))
    


@responsable_mun.route('/view_editresponsable_mun',methods = ['GET'])
@login_required
def view_editresponsable_mun():

    responsable_mun = responsable_agences.query.get(request.args.get('id'))
    return render_template("editresponsable_mun.html", responsable_mun = responsable_mun, user=current_user) 
    


@responsable_mun.route('/save_editresponsable_mun', methods = ['POST'])
@login_required
def save_editresponsable_mun():
    inputs = request.form

    fupdate = responsable_agences.query.get(inputs['id'])
    
    
    fupdate.tel           = inputs['tel']
    fupdate.fax     = inputs['fax']
    fupdate.horaire_ouverture         = inputs['horaire_ouverture']
    fupdate.seance_nationale         = inputs['seance_nationale']
    fupdate.seance_permanence         = inputs['seance_permanence']
   

    db.session.commit()
    flash("responsable_mun Updated Successfully")

    return redirect(url_for('responsable_mun.list_responsable_mun'))
 
@responsable_mun.route('/responsable_mun/delete/<int:id>')
@login_required
def delete_responsable_mun(id):
    shit = responsable_agences.query.get(id)
    db.session.delete(shit)
    db.session.commit()
    flash("responsable_mun Deleted Successfully")
    return redirect(url_for('responsable_mun.list_responsable_mun'))
    

  

    