import React, { Component } from 'react'
import RecommandationDataService from '../../services/recommandation.service'
export default class AddRecommandation extends Component {
  constructor(props) {
    super(props)
    this.onChangeTitre = this.onChangeTitre.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onChangeDomaine = this.onChangeDomaine.bind(this)
    this.onChangeSpecification = this.onChangeSpecification.bind(this)
    this.onChangeRetenu = this.onChangeRetenu.bind(this)
    this.onChangeEtat = this.onChangeEtat.bind(this)
    this.onChangeDate_ins = this.onChangeDate_ins.bind(this)
    //
    this.saveRecommandation = this.saveRecommandation.bind(this)
    this.newRecommandation = this.newRecommandation.bind(this)

    this.state = {
      id: null,
      titre: '',
      description: '',
      domaine: '',
      specification: '',
      retenu: 0,
      etat: 0,
      date_ins: '2022-01-01 00:00:00',
      submitted: false,
    }
  }
  onChangeTitre(e) {
    this.setState({
      titre: e.target.value,
    })
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    })
  }
  onChangeDomaine(e) {
    this.setState({
      domaine: e.target.value,
    })
  }
  onChangeSpecification(e) {
    this.setState({
      specification: e.target.value,
    })
  }
  onChangeRetenu(e) {
    this.setState({
      retenu: e.target.value,
    })
  }
  onChangeEtat(e) {
    this.setState({
      etat: e.target.value,
    })
  }
  onChangeDate_ins(e) {
    this.setState({
      date_ins: e.target.value,
    })
  }
  saveRecommandation() {
    var data = {
      titre: this.state.titre,
      description: this.state.description,
      domaine: this.state.domaine,
      specification: this.state.specification,
      retenu: this.state.retenu,
      etat: this.state.etat,
      date_ins: this.state.date_ins,
    }
    RecommandationDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          domaine: response.data.domaine,
          specification: response.data.specification,
          retenu: response.data.retenu,
          etat: response.data.etat,
          date_ins: response.data.date_ins,
          submitted: true,
        })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  newRecommandation() {
    this.setState({
      id: null,
      title: '',
      description: '',
      domaine: '',
      specification: '',
      retenu: 0,
      etat: 0,
      date_ins: '2022-01-01 00:00:00',
      submitted: false,
    })
  }
  render() {
    return (
      <div className='submit-form'>
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button
              className='btn btn-success'
              onClick={this.newRecommandation}
            >
              New One
            </button>
          </div>
        ) : (
          <div>
            <div className='form-group'>
              <label htmlFor='titre'>titre</label>
              <input
                type='text'
                className='form-control'
                id='titre'
                required
                value={this.state.titre}
                onChange={this.onChangeTitre}
                name='titre'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <textarea
                type='text'
                className='form-control'
                id='description'
                required
                onChange={this.onChangeDescription}
                name='description'
              >
                {this.state.description}
              </textarea>
            </div>
            <div className='form-group'>
              <label htmlFor='domaine'>Domaine</label>
              <input
                type='text'
                className='form-control'
                id='domaine'
                required
                value={this.state.domaine}
                onChange={this.onChangeDomaine}
                name='domaine'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='specification'>Specification</label>
              <textarea
                type='text'
                className='form-control'
                id='specification'
                required
                onChange={this.onChangeSpecification}
                name='specification'
              >
                {this.state.specification}
              </textarea>
            </div>
            <div className='form-group'>
              <label htmlFor='retenu'>Retenu</label>
              <input
                type='text'
                className='form-control'
                id='retenu'
                required
                value={this.state.retenu}
                onChange={this.onChangeRetenu}
                name='retenu'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='etat'>Etat</label>
              <input
                type='text'
                className='form-control'
                id='etat'
                required
                value={this.state.etat}
                onChange={this.onChangeEtat}
                name='etat'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='date_ins'>Date</label>
              <input
                type='date'
                className='form-control'
                id='date_ins'
                required
                value={this.state.date_ins}
                onChange={this.onChangeDate_ins}
                name='date_ins'
              />
            </div>
            <button
              onClick={this.saveRecommandation}
              className='btn btn-success'
            >
              Submit
            </button>
          </div>
        )}
      </div>
    )
  }
}
