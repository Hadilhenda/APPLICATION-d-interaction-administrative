#start importation 
from flask import  render_template, request, redirect, url_for, Blueprint,flash
from flask_login import login_required, current_user
from frame import db
from ..models.recommandations import recommandations

recommandation = Blueprint('recommandation', __name__)

@recommandation.route('/recommandation/list')
@login_required
def list_recommandation():
    recommandationss = recommandations.query.all()
    return render_template("recommandation.html", recommandations = recommandationss, user=current_user)

@recommandation.route('/view_addrec', methods = ['GET'])
@login_required
def view_addrec():
    return render_template("addrec.html", user=current_user)
    
@recommandation.route('/save_addrec', methods = ['POST'])
@login_required
def save_addrec():
    #default input
    etat = '1'
    retenu= '0'
    #Recuperation inputs from formulaire
    inputs = request.form
    titre = inputs['titre']
    description = inputs['desc']
    domaine= inputs['domaine']
    specification= inputs['spec']
    createdAt= inputs['createdAt']
    updatedAt= inputs['updatedAt']
    #Insert
    instance = recommandations(titre, description, domaine, specification, retenu, etat,createdAt,updatedAt)
    db.session.add(instance)
    db.session.commit()
    #flash
    flash("Recommandation Inserted Successfully")
    #Redirect
    return redirect(url_for('recommandation.list_recommandation'))
    
@recommandation.route('/view_editrec',methods = ['GET'])
@login_required
def view_editrec():

    recommandation = recommandations.query.get(request.args.get('id'))
    return render_template("editrec.html", recommandation = recommandation, user=current_user) 
    
@recommandation.route('/save_editrec', methods = ['POST'])
@login_required
def save_editrec():
    inputs = request.form

    fupdate = recommandations.query.get(inputs['id'])
    
    
    fupdate.titre           = inputs['titre']
    fupdate.description     = inputs['desc']
    fupdate.domaine         = inputs['domaine']  
    fupdate.specification   = inputs['spec']


    db.session.commit()
    flash("Recommandation Updated Successfully")

    return redirect(url_for('recommandation.list_recommandation'))
 
@recommandation.route('/recommandation/delete/<int:id>')
@login_required
def delete_rec(id):
    shit = recommandations.query.get(id)
    db.session.delete(shit)
    db.session.commit()
    flash("Recommandation Deleted Successfully")
    return redirect(url_for('recommandation.list_recommandation'))
    
@recommandation.route('/analyse/stat')
@login_required
def analyse():
    recommandationss = recommandations.query.all()
    return render_template("ini.html", recommandations = recommandationss, user=current_user)
  

    