
from flask import request, Blueprint,jsonify
from frame import db
from ..models.hopitals import hopitals

api_hopitals = Blueprint('api_hopitals', __name__)


@api_hopitals.route('/api/hopitals')
def get_hopitals():
	return jsonify([
		{
			'id': hopitals.id, 'nom': hopitals.nom, 'email': hopitals.email,
			'cin': hopitals.cin,'tel': hopitals.tel,'date_ins': hopitals.date_ins
			} for hopital in hopitals.query.all()
	])
		
@api_hopitals.route('/api/hopital/<id>/')
def get_hopital(id):
	print(id)
	hopital = hopitals.query.filter_by(id=id).first_or_404()
	return {
		'id': hopitals.id, 'nom': hopitals.nom, 'email': hopitals.email,
			'cin': hopitals.cin,'tel': hopitals.tel,'date_ins': hopitals.date_ins
		}

@api_hopitals.route('/api/hopital/add', methods=['POST'])
def create_hopital():
	data = request.get_json()
	if not 'nom' in data or not 'email' in data:
		return jsonify({
			'error': 'Bad Request',
			'message': 'nom or email not given'
		}), 400
	if len(data['nom']) < 4 or len(data['email']) < 4:
		return jsonify({
			'error': 'Bad Request',
			'message': 'nom and email must be contain minimum of 4 letters'
		}), 400
	entry = hopitals(
	
			email=data['email'],
	
			tel=data['tel']
			
		)
	db.session.add(entry)
	db.session.commit()
	return {
		'id': entry.id, 'nom': entry.nom, 'email': entry.email,
			'cin': entry.cin,'tel': entry.tel,'date_ins': entry.date_ins 
	}, 201

@api_hopitals.route('/api/hopital/update/<id>', methods=['PUT'])
def uptel(id):
	data = request.get_json()
	if 'nom' not in data:
		return {
			'error': 'Bad Request',
			'message': 'nom field needs to be present'
		}, 400
	hopital = hopitals.query.filter_by(id=id).first_or_404()
	
	hopitals.email=data['email']

	hopitals.tel=data['tel']
	
	
	db.session.commit()
	return jsonify({
		'id': hopitals.id, 'nom': hopitals.nom, 'email': hopitals.email,
			'cin': hopitals.cin,'tel': hopitals.tel,'date_ins': hopitals.date_ins
		})

@api_hopitals.route('/api/hopital/delete/<id>', methods=['DELETE'] )
def delete_hopital(id):
	hopital = hopitals.query.filter_by(id=id).first_or_404()
	db.session.delete(hopital)
	db.session.commit()
	return {
		'success': 'Data deleted successfully'
	}

    

  

    
    