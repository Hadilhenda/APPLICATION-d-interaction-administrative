import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CitoyenDataService from '../../services/citoyen.service'
const MaleInfo = (props) => {
  let { id } = useParams()
  const initialCitoyenState = {
    id: null,
    nom: '',
    prenom: '',
    date_naissance: '2022-01-01 00:00:00',
    adress_naissance: '',
    sexe: '',
    nom_pere: '',
    nom_mere: '',
    remarque: '',
    date_mort: '2022-01-01 00:00:00',
    cause_mort: '',
    date_enterment: '2022-01-03 00:00:00',
    declaration_accouchement: '',
    declaration_hopital: '',
    assistant_accouchement: '',
    cin_pere: '',
    cin_mere: '',
    livret_familial: '',
    assistant_mort: '',
    date_enterement: '',
    etat: 0,
  }
  const [currentCitoyen, setCurrentCitoyen] = useState(initialCitoyenState)
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getRecommandation(this.props.match.params.id)
  // }
  const getCitoyen = (id) => {
    CitoyenDataService.get(id)
      .then((response) => {
        setCurrentCitoyen(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getCitoyen(id)
  }, [id])

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target
  //   setCurrentCitoyen({ ...currentCitoyen, [name]: value })
  // }

  const updatePublished = (status) => {
    var data = {
      id: currentCitoyen.id,
      nom: currentCitoyen.nom,
      prenom: currentCitoyen.prenom,
      date_naissance: currentCitoyen.date_naissance,
      adress_naissance: currentCitoyen.adress_naissance,
      sexe: currentCitoyen.sexe,
      nom_pere: currentCitoyen.nom_pere,
      nom_mere: currentCitoyen.nom_mere,
      remarque: currentCitoyen.remarque,
      date_mort: currentCitoyen.date_mort,
      cause_mort: currentCitoyen.cause_mort,
      date_enterment: currentCitoyen.date_enterment,
      declaration_accouchement: currentCitoyen.declaration_accouchement,
      declaration_hopital: currentCitoyen.declaration_hopital,
      assistant_accouchement: currentCitoyen.assistant_accouchement,
      cin_pere: currentCitoyen.cin_pere,
      cin_mere: currentCitoyen.cin_mere,
      livret_familial: currentCitoyen.livret_familial,
      assistant_mort: currentCitoyen.assistant_mort,
      date_enterement: currentCitoyen.date_enterement,
    }
    CitoyenDataService.update(currentCitoyen.id, data)
      .then((response) => {
        setCurrentCitoyen({ ...currentCitoyen, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateCitoyen = () => {
    CitoyenDataService.update(currentCitoyen.id, currentCitoyen)
      .then((response) => {
        console.log(response.data)
        setMessage('The Citoyen was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }
  return (
    <div>
      {currentCitoyen ? (
        <div className='edit-form'>
          <h4>Citoyen</h4>
          <form>
            <div className='form-group'>
              <label>
                <strong>Status:</strong>
              </label>
              {currentCitoyen.etat === 2
                ? 'Male information'
                : 'En cours de traitement'}
            </div>
          </form>
          {currentCitoyen.etat === 0 ? (
            <button
              className='m-3 btn btn-sm btn-danger'
              onClick={() => updatePublished(2)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className='m-3 btn btn-sm btn-warning'
              onClick={() => updatePublished(0)}
            >
              Publish
            </button>
          )}

          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateCitoyen}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  )
}
export default MaleInfo
