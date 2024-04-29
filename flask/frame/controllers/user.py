#start importation 
from flask import  render_template, request, redirect, url_for, Blueprint,flash
from flask_login import login_required, current_user

from frame import db

from ..models.user import user

import datetime

user1 = Blueprint('user1', __name__) #Moush nafs l esm maa l function besh mataamelsh error

@user1.route('/user/list')
@login_required
def list_user():
    users = user.query.all()
    return render_template("user.html", users = users, user=current_user)


@user1.route('/view_adduser', methods=['GET'])
@login_required
def view_adduser():
    return render_template("adduser.html", user=current_user)

@user1.route('/save_adduser', methods=['POST'])
@login_required
def save_adduser():
    # default input
    etat = '1'
    profil = '1'
    tel = '0'
    permissions = '0'
    now = datetime.datetime.now()
    date_ins = now.strftime(" %y/%m/%d ")
    date_upd = now.strftime(" %y/%m/%d")
    # Recuperation inputs from formulaire
    inputs = request.form
    nom = inputs['nom']
    prenom = inputs['prenom']
    login = inputs['login']
    email = inputs['email']
    password = inputs['password']
    # table des parametres
    instance = user(nom, prenom, email, login,  password, profil, tel, permissions, etat, date_upd, date_ins)
    db.session.add(instance)
    db.session.commit()
    #flash
    flash("User Inserted Successfully")
    return redirect(url_for('user1.list_user'))
    


@user1.route('/view_edituser', methods=['GET'])
@login_required
def view_edituser():
    oneuser = user.query.get(request.args.get('id'))
    return render_template("edituser.html", oneuser=oneuser, user=current_user)



@user1.route('/save_edituser', methods=['POST'])
@login_required
def save_edituser():
    inputs = request.form
    fupdate = user.query.get(inputs['id'])
    fupdate.nom = inputs['nom']
    fupdate.prenom = inputs['prenom']
    fupdate.login = inputs['login']
    fupdate.email = inputs['email']
    fupdate.password = inputs['password']
    db.session.commit()
    flash("User Updated Successfully")
    return redirect(url_for('user1.list_user'))


@user1.route('/user/delete/<int:id>')
@login_required
def delete_user(id):
    shit = user.query.get(id)
    db.session.delete(shit)
    db.session.commit()
    flash("User Deleted Successfully")
    return redirect(url_for('user.list_user'))
    