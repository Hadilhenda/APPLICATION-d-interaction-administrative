#start importation 
from flask import  render_template, request, redirect, url_for, Blueprint,flash
from flask_login import login_required, current_user
from frame import db
from ..models.gouvernorat import gouvernorats

gouvernorat = Blueprint('gouvernorat', __name__)

@gouvernorat.route('/gouvernorat/list')
@login_required
def list_gouvernorat():
    gouvernoratss = gouvernorats.query.all()
    return render_template("gouvernorat.html", gouvernorats = gouvernoratss, user=current_user)


@gouvernorat.route('/view_addgouvernorat', methods = ['GET'])
@login_required
def view_addgouvernorat():
    return render_template("addgouvernorat.html", user=current_user)
    

@gouvernorat.route('/save_addgouvernorat', methods = ['POST'])
@login_required
def save_addgouvernorat():
   
   inputs = request.form
   image = inputs['image'] 
   gouvern = inputs['gouvern']
   code = inputs['code']
   creation = inputs['creation']
   population = inputs['population']
   superficie = inputs['superficie'] 
   delegation = inputs['delegation']
   municipalite = inputs ['municipalite']
   imadas = inputs ['imadas']
   note = inputs ['note']
   #Insert
   instance = gouvernorats(image, gouvern, code, creation, population, superficie, delegation, municipalite, imadas, note)
   db.session.add(instance)
   db.session.commit()
   #flash
   flash("gouvernorat Inserted Successfully")
   #Redigouvernoratt
   return redirect(url_for('gouvernorat.list_gouvernorat'))
    


@gouvernorat.route('/view_editgouvernorat',methods = ['GET'])
@login_required
def view_editgouvernorat():

    gouvernorat = gouvernorats.query.get(request.args.get('id'))
    return render_template("editgouvernorat.html", gouvernorat = gouvernorat, user=current_user) 
    


@gouvernorat.route('/save_editgouvernorat', methods = ['POST'])
@login_required
def save_editgouvernorat():
    inputs = request.form

    fupdate = gouvernorats.query.get(inputs['id'])
    
    
    fupdate.image           = inputs['image']
    fupdate.gouvern     = inputs['gouvern']
    fupdate.code     = inputs['code']
    fupdate.creation     = inputs['creation']
    fupdate.population     = inputs['population']
    fupdate.superficie = inputs['superficie'] 
    fupdate.delegation  = inputs['delegation']
    fupdate.municipalite  = inputs ['municipalite']
    fupdate.imadas = inputs ['imadas']
    fupdate.note = inputs ['note']

    db.session.commit()
    flash("gouvernorat Updated Successfully")

    return redirect(url_for('gouvernorat.list_gouvernorat'))
 
@gouvernorat.route('/gouvernorat/delete/<int:id>')
@login_required
def delete_gouvernorat(id):
    shit = gouvernorats.query.get(id)
    db.session.delete(shit)
    db.session.commit()
    flash("gouvernorat Deleted Successfully")
    return redirect(url_for('gouvernorat.list_gouvernorat'))
    

  

    