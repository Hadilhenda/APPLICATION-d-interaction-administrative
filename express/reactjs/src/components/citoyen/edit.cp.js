import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CitoyenDataService from '../../services/citoyen.service'
import NotificationDataService from '../../services/notifications.service'
import { useSelector } from 'react-redux'
const EditCitoyen = (props) => {
  const { user: currentUser } = useSelector((state) => state.auth)
  let { id } = useParams()
  const initialCitoyenState = {
    id: null,
    nom: '',
    prenom: '',
    date_naissance: '',
    adress_naissance: '',
    sexe: '',
    nom_pere: '',
    nom_mere: '',
    remarque: '',
    date_mort: '',
    cause_mort: '',
    date_enterment: '',
    declaration_accouchement: '',
    declaration_hopital: '',
    assistant_accouchement: '',
    cin_pere: '',
    cin_mere: '',
    livret_familial: '',
    assistant_mort: '',
    date_enterement: '',
    etat: '3',
    id_Res: '',
    id_Hop: '',
  }
  const initialNoteState = {
    id: null,
    action: '',
    sender: '',
    reciver: '',
    citoyen: '',
  }
  const [currentCitoyen, setCurrentCitoyen] = useState(initialCitoyenState)
  const [message, setMessage] = useState('')
  const [notifications, setNotifications] = useState(initialNoteState)
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

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentCitoyen({ ...currentCitoyen, [name]: value })
  }

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
      etat: currentCitoyen.etat,
      id_Res: currentCitoyen.id_Res,
      id_Hop: currentUser.id,
    }
    CitoyenDataService.update(currentCitoyen.id, data)
      .then((response) => {
        setCurrentCitoyen({ ...currentCitoyen, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
    var datav = {
      action: 'Décès',
      sender: currentUser.id,
      reciver: currentCitoyen.id_Res,
      citoyen: currentCitoyen.data.id,
    }
    NotificationDataService.create(datav)
      .then((resp) => {
        console.log(resp.data)
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
            {/* cause_mort */}
            <div className='form-group row'>
              <span
                htmlFor='cause_mort'
                className='control-label col-sm-2 align-self-center mb-0'
                id='cause_mort'
              >
                cause de mort :
              </span>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  id='cause_mort'
                  required
                  value={currentCitoyen.cause_mort}
                  onChange={handleInputChange}
                  name='cause_mort'
                  placeholder='cause_mort'
                />
              </div>
            </div>
            {/* date_mort */}
            <div className='form-group row'>
              <span
                htmlFor='date_mort'
                className='control-label col-sm-2 align-self-center mb-0'
                id='date_mort'
              >
                date mort :
              </span>
              <div className='col-sm-10'>
                <input
                  type='date'
                  className='form-control'
                  id='date_mort'
                  required
                  value={currentCitoyen.date_mort}
                  onChange={handleInputChange}
                  name='date_mort'
                  aria-describedby='date_mort'
                />
              </div>
            </div>
            {/* assistant_mort */}
            <div className='form-group row'>
              <span
                htmlFor='assistant_mort'
                className='control-label col-sm-2 align-self-center mb-0'
                id='assistant_mort'
              >
                assistant mort :
              </span>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='form-control'
                  id='assistant_mort'
                  required
                  value={currentCitoyen.assistant_mort}
                  onChange={handleInputChange}
                  name='assistant_mort'
                  placeholder='assistant_mort'
                />
              </div>
            </div>

            <div className='form-group row'>
              <label>
                <strong>Status:</strong>
              </label>
              {currentCitoyen.etat === 1 ? 'naissance' : 'décès'}
            </div>
          </form>
          {currentCitoyen.etat === 3 ? (
            <button
              className='m-3 btn btn-sm btn-info btn-rounded'
              onClick={() => updatePublished(1)}
            >
              naissance
            </button>
          ) : (
            <button
              className='m-3 btn btn-sm btn-success btn-rounded'
              onClick={() => updatePublished(3)}
            >
              décès
            </button>
          )}

          <button
            type='submit'
            className='btn btn-primary'
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
export default EditCitoyen
