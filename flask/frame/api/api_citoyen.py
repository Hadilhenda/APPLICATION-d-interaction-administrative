
from flask import request, Blueprint,jsonify
from frame import db
from ..models.citoyens import citoyens

api_citoyens = Blueprint('api_citoyens', __name__)


@api_citoyens.route('/api/citoyens')
def get_citoyens():
	return jsonify([
		{ 
			'id': citoyen.id, 'nom': citoyen.nom, 'prenom': citoyen.prenom, 
			'nom_pere': citoyen.nom_pere,'nom_mere': citoyen.nom_mere,
			'date_naissance': citoyen.date_naissance,'adress_naissance': citoyen.adress_naissance,
			'sexe': citoyen.sexe,'remarque': citoyen.remarque, 'date_mort':citoyen.date_mort, 'etat':citoyen.etat, 'cause_mort':citoyen.cause_mort 
			} for citoyen in citoyens.query.all()
	])
		
@api_citoyens.route('/api/citoyen/<id>/')
def get_citoyen(id):
	print(id)
	citoyen = citoyens.query.filter_by(id=id).first_or_404()
	return {
		'id': citoyen.id, 'nom': citoyen.nom, 'prenom': citoyen.prenom,
		'nom_pere': citoyen.nom_pere,'nom_mere': citoyen.nom_mere,
			'date_naissance': citoyen.date_naissance,'adress_naissance': citoyen.adress_naissance,
			'sexe': citoyen.sexe,'remarque': citoyen.remarque, 'date_mort':citoyen.date_mort, 'etat':citoyen.etat , 'cause_mort':citoyen.cause_mort
		}

@api_citoyens.route('/api/citoyen/add', methods=['POST'])
def create_citoyen():
	data = request.get_json()
	if not 'nom' in data or not 'prenom' in data:
		return jsonify({
			'error': 'Bad Request',
			'message': 'nom or prenom not given'
		}), 400
	if len(data['nom']) < 4 or len(data['prenom']) < 4:
		return jsonify({
			'error': 'Bad Request',
			'message': 'nom and prenom must be contain minimum of 4 letters'
		}), 400
	entry = citoyens(
			nom=data['nom'], 
			prenom=data['prenom'],
			nom_pere=data['nom_pere'],
			nom_mere=data['nom_mere'],
			date_naissance=data['date_naissance'],
			adress_naissance=data['adress_naissance'],
			sexe=data['sexe'],
			remarque=data['remarque'],
			date_mort=data['date_mort'],
			etat=data['etat'],  
			cause_mort=data['cause_mort'] 
			
			
		)
	db.session.add(entry)
	db.session.commit()
	return {
		'id': entry.id, 'nom': entry.nom, 'prenom': entry.prenom,
			'nom_pere': entry.nom_pere,'nom_mere': entry.nom_mere,
			'date_naissance': entry.date_naissance,'adress_naissance': entry.adress_naissance,
			'sexe': entry.sexe,'remarque': entry.remarque,'date_mort': entry.date_mort,'etat': entry.etat,'cause_mort': entry.cause_mort
	}, 201

@api_citoyens.route('/api/citoyen/update/<id>', methods=['PUT'])
def update_citoyen(id):
	data = request.get_json()
	if 'nom' not in data:
		return {
			'error': 'Bad Request',
			'message': 'nom field needs to be present'
		}, 400
	citoyen = citoyens.query.filter_by(id=id).first_or_404()
	citoyen.nom=data['nom']
	citoyen.nom_pere=data['nom_pere'],
	citoyen.nom_mere=data['nom_mere'],
	citoyen.date_naissance=data['date_naissance'],
	citoyen.adress_naissance=data['adress_naissance'],
	citoyen.sexe=data['sexe'],
	citoyen.remarque=data['remarque'],
	citoyen.date_mort=data['date_mort']
	citoyen.etat=data['etat']  
	citoyen.cause_mort=data['cause_mort']
	
	
	db.session.commit()
	return jsonify({
		'id': citoyen.id, 'nom': citoyen.nom, 'prenom': citoyen.prenom,
			'nom_pere': citoyen.nom_pere,'nom_mere': citoyen.nom_mere,
			'date_naissance': citoyen.date_naissance,'adress_naissance': citoyen.adress_naissance,
			'sexe': citoyen.sexe,'remarque': citoyen.remarque,'date_mort': citoyen.date_mort,'etat': citoyen.etat,'cause_mort': citoyen.cause_mort
		})

@api_citoyens.route('/api/citoyen/delete/<id>', methods=['DELETE'] )
def delete_citoyen(id):
	citoyen = citoyens.query.filter_by(id=id).first_or_404()
	db.session.delete(citoyen)
	db.session.commit()
	return {
		'success': 'Data deleted successfully'
	}

    

  

    
    