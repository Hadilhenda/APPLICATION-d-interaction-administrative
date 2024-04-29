
from flask import request, Blueprint,jsonify
from frame import db
from ..models.responsable_muns import responsable_agences

api_responsable_muns = Blueprint('api_responsable_muns', __name__)


@api_responsable_muns.route('/api/responsable_muns')
def get_responsable_muns():
	return jsonify([
		{
			'id': responsable_mun.id, 'tel': responsable_mun.tel, 'fax': responsable_mun.fax,
			'horaire_ouverture': responsable_mun.horaire_ouverture,'seance_permanence': responsable_mun.seance_permanence,'seance_nationale': responsable_mun.seance_nationale
			} for responsable_mun in responsable_agences.query.all()
	])
		
@api_responsable_muns.route('/api/responsable_mun/<id>/')
def get_responsable_mun(id):
	print(id)
	responsable_mun = responsable_agences.query.filter_by(id=id).first_or_404()
	return {
		'id': responsable_mun.id, 'tel': responsable_mun.tel, 'fax': responsable_mun.fax,
			'horaire_ouverture': responsable_mun.horaire_ouverture,'seance_permanence': responsable_mun.seance_permanence,'seance_nationale': responsable_mun.seance_nationale
		}

@api_responsable_muns.route('/api/responsable_mun/add', methods=['POST'])
def create_responsable_mun():
	data = request.get_json()
	if not 'tel' in data or not 'fax' in data:
		return jsonify({
			'error': 'Bad Request',
			'message': 'tel or fax not given'
		}), 400
	if len(data['tel']) < 4 or len(data['fax']) < 4:
		return jsonify({
			'error': 'Bad Request',
			'message': 'tel and fax must be contain minimum of 4 letters'
		}), 400
	entry = responsable_agences(
			tel=data['tel'], 
			fax=data['fax'],
			horaire_ouverture=data['horaire_ouverture'],
			seance_permanence=data['seance_permanence']
			
			
		)
	db.session.add(entry)
	db.session.commit()
	return {
		'id': entry.id, 'tel': entry.tel, 'fax': entry.fax,
			'horaire_ouverture': entry.horaire_ouverture,'seance_nationale': entry.seance_nationale,'seance_permanence': entry.seance_permanence 
	}, 201

@api_responsable_muns.route('/api/responsable_mun/update/<id>', methods=['PUT'])
def update_responsable_mun(id):
	data = request.get_json()
	if 'tel' not in data:
		return {
			'error': 'Bad Request',
			'message': 'tel field needs to be present'
		}, 400
	responsable_mun = responsable_agences.query.filter_by(id=id).first_or_404()
	responsable_mun.tel=data['tel']
	responsable_mun.fax=data['fax']
	responsable_mun.horaire_ouverture=data['horaire_ouverture']
	responsable_mun.seance_nationale=data['seance_nationale']
	responsable_mun.seance_permanence=data['seance_permanence']
	
	db.session.commit()
	return jsonify({
		'id': responsable_mun.id, 'tel': responsable_mun.tel, 'fax': responsable_mun.fax,
			'horaire_ouverture': responsable_mun.horaire_ouverture,'seance_nationale': responsable_mun.seance_nationale,'seance_permanence': responsable_mun.seance_permanence
		})

@api_responsable_muns.route('/api/responsable_mun/delete/<id>', methods=['DELETE'] )
def delete_responsable_mun(id):
	responsable_mun = responsable_agences.query.filter_by(id=id).first_or_404()
	db.session.delete(responsable_mun)
	db.session.commit()
	return {
		'success': 'Data deleted successfully'
	}

    

  

    
    