
from flask import request, Blueprint,jsonify
from frame import db
from ..models.municipalites import communes

api_municipalites = Blueprint('api_municipalites', __name__)


@api_municipalites.route('/api/municipalites')
def get_municipalites():
	return jsonify([
		{
			'id': municipalite.id, 'email': municipalite.email, 'tel': municipalite.tel,
			'nb_departement': municipalite.nb_departement,'presidant': municipalite.presidant,'secretaire': municipalite.secretaire
			} for municipalite in municipalites.query.all()
	])
		
@api_municipalites.route('/api/municipalite/<id>/')
def get_municipalite(id):
	print(id)
	municipalite = communes.query.filter_by(id=id).first_or_404()
	return {
		'id': municipalite.id, 'email': municipalite.email, 'presidant': municipalite.presidant,
			'nb_departement': municipalite.nb_departement,'tel': municipalite.tel,'secretaire': municipalite.secretaire
		}

@api_municipalites.route('/api/municipalite/add', methods=['POST'])
def create_municipalite():
	data = request.get_json()
	if not 'email' in data or not 'email' in data:
		return jsonify({
			'error': 'Bad Request',
			'message': 'email or email not given'
		}), 400
	if len(data['email']) < 4 or len(data['email']) < 4:
		return jsonify({
			'error': 'Bad Request',
			'message': 'email and email must be contain minimum of 4 letters'
		}), 400
	entry = communes(
			email=data['email'], 
			secretaire=data['secretaire'],
			nb_departement=data['nb_departement'],
			tel=data['tel']
			
		)
	db.session.add(entry)
	db.session.commit()
	return {
		'id': entry.id, 'email': entry.email, 'presidant': entry.presidant,
			'nb_departement': entry.nb_departement,'tel': entry.tel,'secretaire': entry.secretaire 
	}, 201

@api_municipalites.route('/api/municipalite/update/<id>', methods=['PUT'])
def uptel(id):
	data = request.get_json()
	if 'email' not in data:
		return {
			'error': 'Bad Request',
			'message': 'email field needs to be present'
		}, 400
	municipalite = communes.query.filter_by(id=id).first_or_404()
	municipalite.email=data['email']
	presidant.email=data['presidant']
	municipalite.nb_departement=data['nb_departement']
	municipalite.tel=data['tel']
	municipalite.secretaire=data['secretaire']
	
	db.session.commit()
	return jsonify({
		'id': municipalite.id, 'email': municipalite.email, 'presidant': municipalite.presidant,
			'nb_departement': municipalite.nb_departement,'tel': municipalite.tel,'secretaire': municipalite.secretaire
		})

@api_municipalites.route('/api/municipalite/delete/<id>', methods=['DELETE'] )
def delete_municipalite(id):
	municipalite = communes.query.filter_by(id=id).first_or_404()
	db.session.delete(municipalite)
	db.session.commit()
	return {
		'success': 'Data deleted successfully'
	}

    

  

    
    