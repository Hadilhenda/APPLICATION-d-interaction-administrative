#start importation 
from flask import  render_template, request, redirect, url_for, Blueprint,flash
from flask_login import login_required, current_user
from frame import db
from ..models.hopitals import hopitals

hopital = Blueprint('hopital', __name__)

@hopital.route('/hopital/list')
@login_required
def list_hopital():
    hopitalss = hopitals.query.all()
    return render_template("hopital.html", hopitals = hopitalss, user=current_user)


@hopital.route('/view_addhopital', methods = ['GET'])
@login_required
def view_addhopital():
    return render_template("addhopital.html", user=current_user)
    

@hopital.route('/save_addhopital', methods = ['POST'])
@login_required
def save_addhopital():
    #default input
   
    #hopitaluperation inputs from formulaire
    inputs = request.form
   
    tel = inputs['tel']
    email = inputs['email']
        
    #Insert
    instance = hopitals( tel, email)
    db.session.add(instance)
    db.session.commit()
    #flash
    flash("hopital Inserted Successfully")
    #Redihopitalt
    return redirect(url_for('hopital.list_hopital'))
    


@hopital.route('/view_edithopital',methods = ['GET'])
@login_required
def view_edithopital():

    hopital = hopitals.query.get(request.args.get('id'))
    return render_template("edithopital.html", hopital = hopital, user=current_user) 
    


@hopital.route('/save_edithopital', methods = ['POST'])
@login_required
def save_edithopital():
    inputs = request.form

    fupdate = hopitals.query.get(inputs['id'])
    
    
  
    fupdate.tel           = inputs['tel']
    fupdate.email     = inputs['email']
    

    db.session.commit()
    flash("hopital Updated Successfully")

    return redirect(url_for('hopital.list_hopital'))
 
@hopital.route('/hopital/delete/<int:id>')
@login_required
def delete_hopital(id):
    shit = hopitals.query.get(id)
    db.session.delete(shit)
    db.session.commit()
    flash("hopital Deleted Successfully")
    return redirect(url_for('hopital.list_hopital'))
    

  

    