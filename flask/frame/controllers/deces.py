#start importation 
from flask import  render_template, request, redirect, url_for, Blueprint,flash
from flask_login import login_required, current_user
from frame import db
from ..models.decess import decess
import datetime
deces = Blueprint('deces', __name__)

@deces.route('/deces/list')
@login_required
def list_deces():
    deces = decess.query.all()
    return render_template("deces.html", decess = deces, user=current_user)


@deces.route('/view_adddeces', methods = ['GET'])
@login_required
def view_adddeces():
    return render_template("adddeces.html", user=current_user)
    

@deces.route('/save_adddeces', methods = ['POST'])
@login_required
def save_adddeces():
    #default input
    now = datetime.datetime.now()
    date_deces = now.strftime(" %y/%m/%d ")
    #decesuperation inputs from formulaire
    inputs = request.form
    ca_d = inputs['ca_d']
    
    #Insert
    instance = decess(date_deces,ca_d)
    db.session.add(instance)
    db.session.commit()
    #flash
    flash("deces Inserted Successfully")
    #Redidecest
    return redirect(url_for('deces.list_deces'))
    


@deces.route('/view_editdeces',methods = ['GET'])
@login_required
def view_editdeces():

    deces = decess.query.get(request.args.get('id'))
    return render_template("editdeces.html", deces = deces, user=current_user) 
    


@deces.route('/save_editdeces', methods = ['POST'])
@login_required
def save_editdeces():
    inputs = request.form

    fupdate = decess.query.get(inputs['id'])
    
    
    
    fupdate.ca_d     = inputs['ca_d']
   

    db.session.commit()
    flash("deces Updated Successfully")

    return redirect(url_for('deces.list_deces'))
 
@deces.route('/deces/delete/<int:id>')
@login_required
def delete_deces(id):
    shit = decess.query.get(id)
    db.session.delete(shit)
    db.session.commit()
    flash("deces Deleted Successfully")
    return redirect(url_for('deces.list_deces'))
    

  

    