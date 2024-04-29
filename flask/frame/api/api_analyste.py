
from flask import request, Blueprint,jsonify
from frame import db
from ..models.analystes import analystes

api_analystes = Blueprint('api_analystes', __name__)


@api_analystes.route('/api/analystes')
def get_analystes():
	return jsonify([
		{
			'id': analyste.id, 'diplome': analyste.diplome, 'specialite': analyste.specialite,
			'createdAt': analyste.createdAt,'mission': analyste.mission,'updatedAt': analyste.updatedAt
			} for analyste in analystes.query.all()
	])
		
@api_analystes.route('/api/analyste/<id>/')
def get_analyste(id):
	print(id)
	analyste = analystes.query.filter_by(id=id).first_or_404()
	return {
		'id': analyste.id, 'diplome': analyste.diplome, 'specialite': analyste.specialite,
			'createdAt': analyste.createdAt,'mission': analyste.mission,'updatedAt': analyste.updatedAt
		}

@api_analystes.route('/api/analyste/add', methods=['POST'])
def create_analyste():
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
	entry = analystes(
			diplome=data['diplome'], 
			specialite=data['specialite'],
			createdAt=data['createdAt'],
			mission=data['mission'],
	  updatedAt=data['updatedAt']
			
		)
	db.session.add(entry)
	db.session.commit()
	return {
		'id': entry.id, 'diplome': entry.diplome, 'specialite': entry.specialite,
			'createdAt': entry.createdAt,'mission': entry.mission,'updatedAt': entry.updatedAt 
	}, 201

@api_analystes.route('/api/analyste/update/<id>', methods=['PUT'])
def update_analyste(id):
	data = request.get_json()
	if 'diplome' not in data:
		return {
			'error': 'Bad Request',
			'message': 'diplome field needs to be present'
		}, 400
	analyste = analystes.query.filter_by(id=id).first_or_404()
	analyste.diplome=data['diplome']
	analyste.specialite=data['specialite']
	analyste.createdAt=data['createdAt']
	analyste.mission=data['mission']
	analyste.updatedAt=data['updatedAt']
	
	db.session.commit()
	return jsonify({
		'id': analyste.id, 'diplome': analyste.diplome, 'specialite': analyste.specialite,
			'createdAt': analyste.createdAt,'mission': analyste.mission,'updatedAt': analyste.updatedAt
		})

@api_analystes.route('/api/analyste/delete/<id>', methods=['DELETE'] )
def delete_analyste(id):
	analyste = analystes.query.filter_by(id=id).first_or_404()
	db.session.delete(analyste)
	db.session.commit()
	return {
		'success': 'Data deleted successfully'
	}

    

  

    
    