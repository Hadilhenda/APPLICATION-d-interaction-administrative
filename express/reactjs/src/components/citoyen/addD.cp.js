import React, { useState } from 'react'
import CitoyenDataService from '../../services/citoyen.service'
import NotificationDataService from '../../services/notifications.service'
import { useSelector } from 'react-redux'
const AddDCitoyen = () => {
  const { user: currentUser } = useSelector((state) => state.auth)
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
    date_enterement: '',
    declaration_accouchement: '',
    declaration_hopital: '',
    assistant_accouchement: '',
    cin_pere: '',
    cin_mere: '',
    livret_familial: '',
    assistant_mort: '',
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
  const [citoyen, setCitoyen] = useState(initialCitoyenState)
  const [submitted, setSubmitted] = useState(false)
  const [notifications, setNotifications] = useState(initialNoteState)
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCitoyen({ ...citoyen, [name]: value })
  }
  const newNote = () => {
    setNotifications(initialNoteState)
    setSubmitted(false)
  }

  const saveCitoyen = () => {
    CitoyenDataService.findResp(currentUser.id)
      .then((response) => {
        console.log('idresp ', response.data[0].id_user)
        var data = {
          nom: citoyen.nom,
          prenom: citoyen.prenom,
          date_naissance: citoyen.date_naissance,
          adress_naissance: citoyen.adress_naissance,
          sexe: citoyen.sexe,
          nom_pere: citoyen.nom_pere,
          nom_mere: citoyen.nom_mere,
          remarque: citoyen.remarque,
          date_mort: citoyen.date_mort,
          cause_mort: citoyen.cause_mort,
          declaration_accouchement: citoyen.declaration_accouchement,
          declaration_hopital: citoyen.declaration_hopital,
          assistant_accouchement: citoyen.assistant_accouchement,
          cin_pere: citoyen.cin_pere,
          cin_mere: citoyen.cin_mere,
          livret_familial: citoyen.livret_familial,
          assistant_mort: citoyen.assistant_mort,
          date_enterement: citoyen.date_enterement,
        }
        CitoyenDataService.create(data)
          .then((res) => {
            setCitoyen({
              id: res.data.id,
              nom: res.data.nom,
              prenom: res.data.prenom,
              date_naissance: res.data.date_naissance,
              adress_naissance: res.data.adress_naissance,
              sexe: res.data.sexe,
              nom_pere: res.data.nom_pere,
              nom_mere: res.data.nom_mere,
              remarque: res.data.remarque,
              date_mort: res.data.date_mort,
              cause_mort: res.data.cause_mort,
              declaration_accouchement: res.data.declaration_accouchement,
              declaration_hopital: res.data.declaration_hopital,
              assistant_accouchement: res.data.assistant_accouchement,
              cin_pere: res.data.cin_pere,
              cin_mere: res.data.cin_mere,
              livret_familial: res.data.livret_familial,
              assistant_mort: res.data.assistant_mort,
              date_enterement: res.data.date_enterement,
              id_Res: res.data.id_Res,
              id_Hop: currentUser.id,
            })
            var datanote = {
              action: 'Décès',
              sender: citoyen.sender,
              reciver: citoyen.reciver,
              citoyen: citoyen.citoyen,
              createdAt: citoyen.createdAt,
            }
            NotificationDataService.create(datanote)
              .then((response) => {
                setCitoyen({
                  id: response.data.id,
                  action: response.data.action,
                  sender: response.data.sender,
                  reciver: response.data.reciver,
                  citoyen: response.data.citoyen,
                  createdAt: response.data.createdAt,
                })
                setSubmitted(true)
                console.log(response.data)
              })
              .catch((e) => {
                console.log(e)
              })
            setSubmitted(true)
            console.log(response.data)
          })
          .catch((e) => {
            console.log(e)
          })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newCitoyen = () => {
    setCitoyen(initialCitoyenState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newCitoyen}>
            New One
          </button>
        </div>
      ) : (
        <div>
          {/* date_enterment */}
          <div className='input-group mb-3'>
            <span
              htmlFor='date_enterement'
              className='input-group-text'
              id='date_enterement'
            >
              date enterment
            </span>
            <input
              type='date'
              className='form-control'
              id='date_enterement'
              required
              value={citoyen.date_enterement}
              onChange={handleInputChange}
              name='date_enterement'
              aria-describedby='date_enterement'
              placeholder='date_enterement'
            />
          </div>
          {/* cause_mort */}
          <div className='input-group mb-3'>
            <span
              htmlFor='cause_mort'
              className='input-group-text'
              id='cause_mort'
            >
              cause de mort
            </span>
            <input
              type='text'
              className='form-control'
              id='cause_mort'
              required
              value={citoyen.cause_mort}
              onChange={handleInputChange}
              name='cause_mort'
              placeholder='cause_mort'
            />
          </div>
          {/* date_mort */}
          <div className='input-group mb-3'>
            <span
              htmlFor='date_mort'
              className='input-group-text'
              id='date_mort'
            >
              date mort
            </span>
            <input
              type='date'
              className='form-control'
              id='date_mort'
              required
              value={citoyen.date_mort}
              onChange={handleInputChange}
              name='date_mort'
              aria-describedby='date_mort'
            />
          </div>
          {/* assistant_mort */}
          <div className='input-group mb-3'>
            <span
              htmlFor='assistant_mort'
              className='input-group-text'
              id='assistant_mort'
            >
              assistant mort
            </span>
            <input
              type='text'
              className='form-control'
              id='assistant_mort'
              required
              value={citoyen.assistant_mort}
              onChange={handleInputChange}
              name='assistant_mort'
              placeholder='assistant_mort'
            />
          </div>

          <button onClick={saveCitoyen} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddDCitoyen
