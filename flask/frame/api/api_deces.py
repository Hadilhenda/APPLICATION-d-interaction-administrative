
from flask import request, Blueprint,jsonify
from frame import db
from ..models.decess import decess

api_decess = Blueprint('api_decess', __name__)


@api_decess.route('/api/decess')
def get_decess():
	return jsonify([
		{
			'id': deces.id, 'nom': deces.nom, 'prenom': deces.prenom,
			'cin': deces.cin,'date_deces': deces.date_deces,'date_ins': deces.date_ins
			} for deces in decess.query.all()
	])
		
@api_decess.route('/api/deces/<id>/')
def get_deces(id):
	print(id)
	deces = decess.query.filter_by(id=id).first_or_404()
	return {
		'id': deces.id, 'nom': deces.nom, 'prenom': deces.prenom,
			'cin': deces.cin,'date_deces': deces.date_deces,'date_ins': deces.date_ins
		}

@api_decess.route('/api/deces/add', methods=['POST'])
def create_deces():
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
	entry = decess(
			nom=data['nom'], 
			prenom=data['prenom'],
			cin=data['cin'],
			date_deces=data['date_deces']
			
		)
	db.session.add(entry)
	db.session.commit()
	return {
		'id': entry.id, 'nom': entry.nom, 'prenom': entry.prenom,
			'cin': entry.cin,'date_deces': entry.date_deces,'date_ins': entry.date_ins 
	}, 201

@api_decess.route('/api/deces/update/<id>', methods=['PUT'])
def update_deces(id):
	data = request.get_json()
	if 'nom' not in data:
		return {
			'error': 'Bad Request',
			'message': 'nom field needs to be present'
		}, 400
	deces = decess.query.filter_by(id=id).first_or_404()
	deces.nom=data['nom']
	deces.prenom=data['prenom']
	deces.cin=data['cin']
	deces.date_deces=data['date_deces']
	deces.date_ins=data['date_ins']
	
	db.session.commit()
	return jsonify({
		'id': deces.id, 'nom': deces.nom, 'prenom': deces.prenom,
			'cin': deces.cin,'date_deces': deces.date_deces,'date_ins': deces.date_ins
		})

@api_decess.route('/api/deces/delete/<id>', methods=['DELETE'] )
def delete_deces(id):
	deces = decess.query.filter_by(id=id).first_or_404()
	db.session.delete(deces)
	db.session.commit()
	return {
		'success': 'Data deleted successfully'
	}

    

  

    
    