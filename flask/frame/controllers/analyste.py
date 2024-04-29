#start importation 
from flask import  render_template, request, redirect, url_for, Blueprint,flash
from flask_login import login_required, current_user
from frame import db
from ..models.analystes import analystes

analyste = Blueprint('analyste', __name__)

@analyste.route('/analyste/list')
@login_required
def list_analyste():
    analystess = analystes.query.all()
    return render_template("analyste.html", analystes = analystess, user=current_user)


@analyste.route('/view_addanalyste', methods = ['GET'])
@login_required
def view_addanalyste():
    return render_template("addanalyste.html", user=current_user)
    

@analyste.route('/save_addanalyste', methods = ['POST'])
@login_required
def save_addanalyste():
   
    inputs = request.form
    diplome = inputs['diplome']
    specialite = inputs['specialite']
    createdAt= inputs['createdAt']
    mission = inputs['mission']
    updatedAt= inputs['updatedAt']
    
    #Insert
    instance = analystes(diplome, specialite, createdAt, mission, updatedAt)
    db.session.add(instance)
    db.session.commit()
    #flash
    flash("analyste Inserted Successfully")
    #Redianalystet
    return redirect(url_for('analyste.list_analyste'))
    


@analyste.route('/view_editanalyste',methods = ['GET'])
@login_required
def view_editanalyste():

    analyste = analystes.query.get(request.args.get('id'))
    return render_template("editanalyste.html", analyste = analyste, user=current_user) 
    


@analyste.route('/save_editanalyste', methods = ['POST'])
@login_required
def save_editanalyste():
    inputs = request.form

    fupdate = analystes.query.get(inputs['id'])
    
    
    fupdate.diplome           = inputs['diplome']
    fupdate.specialite     = inputs['specialite']
    fupdate.createdAt     = inputs['createdAt']
    fupdate.mission     = inputs['mission']
    fupdate.updatedAt     = inputs['updatedAt']

    db.session.commit()
    flash("analyste Updated Successfully")

    return redirect(url_for('analyste.list_analyste'))
 
@analyste.route('/analyste/delete/<int:id>')
@login_required
def delete_analyste(id):
    shit = analystes.query.get(id)
    db.session.delete(shit)
    db.session.commit()
    flash("analyste Deleted Successfully")
    return redirect(url_for('analyste.list_analyste'))
    

  

    