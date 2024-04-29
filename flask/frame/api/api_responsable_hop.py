
from flask import request, Blueprint,jsonify
from frame import db
from ..models.responsable_hops import gestionnaire_hopitals

api_responsable_hops = Blueprint('api_responsable_hops', __name__)


@api_responsable_hops.route('/api/responsable_hops')
def get_responsable_hops():
	return jsonify([
		{
			'id': responsable_hop.id, 'diplome': responsable_hop.diplome, 'specialite': responsable_hop.specialite,
			'salaire': responsable_hop.salaire,'mission': responsable_hop.mission,'cv': responsable_hop.cv
			} for responsable_hop in gestionnaire_hopitals.query.all()
	])
		
@api_responsable_hops.route('/api/responsable_hop/<id>/')
def get_responsable_hop(id):
	print(id)
	responsable_hop = gestionnaire_hopitals.query.filter_by(id=id).first_or_404()
	return {
		'id': responsable_hop.id, 'diplome': responsable_hop.diplome, 'specialite': responsable_hop.specialite,
			'salaire': responsable_hop.salaire,'mission': responsable_hop.mission,'cv': responsable_hop.cv
		}

@api_responsable_hops.route('/api/responsable_hop/add', methods=['POST'])
def create_responsable_hop():
	data = request.get_json()
	if not 'diplome' in data or not 'specialite' in data:
		return jsonify({
			'error': 'Bad Request',
			'message': 'diplome or specialite not given'
		}), 400
	if len(data['diplome']) < 4 or len(data['specialite']) < 4:
		return jsonify({
			'error': 'Bad Request',
			'message': 'diplome and specialite must be contain minimum of 4 letters'
		}), 400
	entry = gestionnaire_hopitals(
			diplome=data['diplome'], 
			specialite=data['specialite'],
			mission=data['mission'],
			salaire=data['salaire'],
			cv=data['cv']
			
			
		)
	db.session.add(entry)
	db.session.commit()
	return {
		'id': entry.id, 'diplome': entry.diplome, 'specialite': entry.specialite,
			'mission': entry.mission,'salaire': entry.salaire,'profil': entry.profil,'cv': entry.cv 
	}, 201

@api_responsable_hops.route('/api/responsable_hop/update/<id>', methods=['PUT'])
def update_responsable_hop(id):
	data = request.get_json()
	if 'diplome' not in data:
		return {
			'error': 'Bad Request',
			'message': 'diplome field needs to be present'
		}, 400
	responsable_hop = gestionnaire_hopitals.query.filter_by(id=id).first_or_404()
	responsable_hop.diplome=data['diplome']
	responsable_hop.specialite=data['specialite']
	responsable_hop.mission=data['mission']
    # responsable_hop.salaire=data['salaire']
	responsable_hop.profil=data['profil']
	responsable_hop.cv=data['cv']
	
	db.session.commit()
	return jsonify({
		'id': responsable_hop.id, 'diplome': responsable_hop.diplome, 'specialite': responsable_hop.specialite,
		'mission': responsable_hop.mission,'salaire': responsable_hop.salaire,'profil': responsable_hop.profil,'cv': responsable_hop.cv
	})

@api_responsable_hops.route('/api/responsable_hop/delete/<id>', methods=['DELETE'] )
def delete_responsable_hop(id):
	responsable_hop = gestionnaire_hopitals.query.filter_by(id=id).first_or_404()
	db.session.delete(responsable_hop)
	db.session.commit()
	return {
		'success': 'Data deleted successfully'
	}

    

  

    
    