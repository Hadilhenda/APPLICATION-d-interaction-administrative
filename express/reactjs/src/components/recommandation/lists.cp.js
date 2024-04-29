import React, { Component } from 'react'
import RecommandationDataService from '../../services/recommandation.service'
import { Link, Navigate } from 'react-router-dom'
export default class ShowRecommandations extends Component {
  constructor(props) {
    super(props)
    this.onChangeSearchTitre = this.onChangeSearchTitre.bind(this)
    this.retrieveRecommandations = this.retrieveRecommandations.bind(this)
    this.refreshList = this.refreshList.bind(this)
    this.setActiveRecommandation = this.setActiveRecommandation.bind(this)
    this.removeAllRecommandations = this.removeAllRecommandation.bind(this)
    this.deleteRecommandation = this.deleteRecommandation.bind(this)
    this.searchTitre = this.searchTitre.bind(this)
    this.state = {
      recommandations: [],
      currentRecommandation: null,
      currentIndex: -1,
      searchTitre: '',
    }
  }
  componentDidMount() {
    this.retrieveRecommandations()
  }
  onChangeSearchTitre(e) {
    const searchTitre = e.target.value
    this.setState({
      searchTitre: searchTitre,
    })
  }
  retrieveRecommandations() {
    RecommandationDataService.getAll()
      .then((response) => {
        this.setState({
          recommandations: response.data,
        })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  refreshList() {
    this.retrieverecommandations()
    this.setState({
      currentRecommandation: null,
      currentIndex: -1,
    })
  }
  setActiveRecommandation(recommandation, index) {
    this.setState({
      currentRecommandation: recommandation,
      currentIndex: index,
    })
  }
  removeAllRecommandation() {
    RecommandationDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        this.refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }
  searchTitre() {
    RecommandationDataService.findByTitre(this.state.searchTitre)
      .then((response) => {
        this.setState({
          recommandations: response.data,
        })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  deleteRecommandation() {
    RecommandationDataService.delete(this.state.currentRecommandation.id)
      .then((response) => {
        console.log(response.data)
        return <Navigate to='/recommandations' />
      })
      .catch((e) => {
        console.log(e)
      })
  }
  render() {
    const {
      searchTitre,
      recommandations,
      currentRecommandation,
      currentIndex,
    } = this.state
    return (
      <div className='list row'>
        <div className='col-md-8'>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Search by titre'
              value={searchTitre}
              onChange={this.onChangeSearchTitre}
            />
            <div className='input-group-append'>
              <button
                className='btn btn-outline-secondary'
                type='button'
                onClick={this.searchTitre}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <h4>
            Recommandations List{' '}
            <Link
              to={'/addRecommandation'}
              className='m-3 btn btn-sm btn-primary'
            >
              New
            </Link>
          </h4>

          <ul className='list-group'>
            {recommandations &&
              recommandations.map((recommandation, index) => (
                <li
                  className={
                    'list-group-item ' +
                    (index === currentIndex ? 'active' : '')
                  }
                  onClick={() =>
                    this.setActiveRecommandation(recommandation, index)
                  }
                  key={index}
                >
                  {recommandation.titre}
                </li>
              ))}
          </ul>
          <button
            className='m-3 btn btn-sm btn-danger'
            onClick={this.removeAllRecommandations}
          >
            Remove All
          </button>
        </div>
        <div className='col-md-6'>
          {currentRecommandation ? (
            <div>
              <h4>Recommandation</h4>
              <div>
                <label>
                  <strong>Titre:</strong>
                </label>{' '}
                {currentRecommandation.titre}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{' '}
                {currentRecommandation.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{' '}
                {currentRecommandation.etat === 1 ? 'Published' : 'Private'}
              </div>
              <Link
                to={'/editRecommandation/' + currentRecommandation.id}
                className='m-3 btn btn-sm btn-warning'
              >
                Edit
              </Link>
              <button
                className='m-3 btn btn-sm btn-danger'
                onClick={this.deleteRecommandation}
              >
                Delete
              </button>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Recommandation...</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
