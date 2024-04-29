
from flask import request, Blueprint,jsonify
from frame import db
from ..models.gouvernorat import gouvernorats

api_gouvernorats = Blueprint('api_gouvernorats', __name__)


@api_gouvernorats.route('/api/gouvernorats')
def get_gouvernorats():
	return jsonify([
		{
			'id': gouvernorat.id, 'image': gouvernorat.image, 'gouvern': gouvernorat.gouvern,
			'code': gouvernorat.code,'creation': gouvernorat.creation,'population': gouvernorat.population,
			'superficie': gouvernorat.superficie,'delegation': gouvernorat.delegation,'municipalite': gouvernorat.municipalite,'imadas': gouvernorat.imadas,'note': gouvernorat.note
			} for gouvernorat in gouvernorats.query.all()
	])
		
@api_gouvernorats.route('/api/gouvernorat/<id>/')
def get_gouvernorat(id):
	print(id)
	gouvernorat = gouvernorats.query.filter_by(id=id).first_or_404()
	return {
		'id': gouvernorat.id, 'image': gouvernorat.image, 'gouvern': gouvernorat.gouvern,
			'code': gouvernorat.code,'creation': gouvernorat.creation,'population': gouvernorat.population,'superficie': gouvernorat.superficie,'delegation': gouvernorat.delegation,'municipalite': gouvernorat.municipalite,'imadas': gouvernorat.imadas,'note': gouvernorat.note
		}

@api_gouvernorats.route('/api/gouvernorat/add', methods=['POST'])
def create_gouvernorat():
	data = request.get_json()
	if not 'image' in data or not 'gouvern' in data:
		return jsonify({
			'error': 'Bad Request',
			'message': 'image or gouvern not given'
		}), 400
	if len(data['image']) < 4 or len(data['gouvern']) < 4:
		return jsonify({
			'error': 'Bad Request',
			'message': 'image and gouvern must be contain minimum of 4 letters'
		}), 400
	entry = gouvernorats(
			image=data['image'], 
			gouvern=data['gouvern'],
			code=data['code'],
			creation=data['creation'],
	  population=data['population'],
   superficie = data['superficie'], 
   delegation= data['delegation'],
   municipalite= data ['municipalite'],
   imadas = data ['imadas'],
   note = data ['note']
			
		)
	db.session.add(entry)
	db.session.commit()
	return {
		'id': entry.id, 'image': entry.image, 'gouvern': entry.gouvern,
		'code': entry.code,'creation': entry.creation,'population': entry.population ,
  'superficie': entry.superficie , 'delegation' : entry.delegation , 'municipalite' : entry.municipalite,'imadas': entry.imadas, 'note' : entry.note 
	}, 201

@api_gouvernorats.route('/api/gouvernorat/update/<id>', methods=['PUT'])
def update_gouvernorat(id):
			data = request.get_json()
			if 'image' not in data:
				return {
					'error': 'Bad Request',
					'message': 'image field needs to be present'
				}, 400
			gouvernorat = gouvernorats.query.filter_by(id=id).first_or_404()
			gouvernorat.image=data['image']
			gouvernorat.gouvern=data['gouvern']
			gouvernorat.code=data['code']
			gouvernorat.creation=data['creation']
			gouvernorat.population=data['population']
			gouvernorat.superficie=data['superficie']
			gouvernorat.delegation=data['delegation']
			gouvernorat.municipalite=data['municipalite']
			gouvernorat.imadas=data['imadas']
			gouvernorat.note=data['note']
			
			db.session.commit()
			return jsonify({
				'id': gouvernorat.id, 'image': gouvernorat.image, 'gouvern': gouvernorat.gouvern,
					'code': gouvernorat.code,'creation': gouvernorat.creation,'population': gouvernorat.population,'superficie': gouvernorat.superficie,'delegation': gouvernorat.delegation,'municipalite': gouvernorat.municipalite,'imadas': gouvernorat.imadas,'note': gouvernorat.note
				})

@api_gouvernorats.route('/api/gouvernorat/delete/<id>', methods=['DELETE'] )
def delete_gouvernorat(id):
	gouvernorat = gouvernorats.query.filter_by(id=id).first_or_404()
	db.session.delete(gouvernorat)
	db.session.commit()
	return {
		'success': 'Data deleted successfully'
	}

    

  

    
    