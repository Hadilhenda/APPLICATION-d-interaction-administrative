import React, { useState } from 'react'
import CitoyenDataService from '../../services/citoyen.service'
import NotificationDataService from '../../services/notifications.service'
import { useSelector } from 'react-redux'
const AddCitoyen = () => {
  const { user: currentUser } = useSelector((state) => state.auth)
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
    etat: '0',
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
          declaration_accouchement: citoyen.declaration_accouchement,
          declaration_hopital: citoyen.declaration_hopital,
          assistant_accouchement: citoyen.assistant_accouchement,
          cin_pere: citoyen.cin_pere,
          cin_mere: citoyen.cin_mere,
          livret_familial: citoyen.livret_familial,
          etat: citoyen.etat,
          id_Res: response.data.id_user,
          id_Hop: currentUser.id,
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
              declaration_accouchement: res.data.declaration_accouchement,
              declaration_hopital: res.data.declaration_hopital,
              assistant_accouchement: res.data.assistant_accouchement,
              cin_pere: res.data.cin_pere,
              cin_mere: res.data.cin_mere,
              livret_familial: res.data.livret_familial,
              etat: res.data.etat,
              id_Res: response.data[0].id_user,
              id_Hop: currentUser.id,
            })
            var datav = {
              action: 'Naissance',
              sender: currentUser.id,
              reciver: response.data[0].id_user,
              citoyen: res.data.id,
            }
            NotificationDataService.create(datav)
              .then((resp) => {
                console.log(resp.data)
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
          {/* nom */}
          <div className='form-group row'>
            <span
              htmlFor='nom'
              className='control-label col-sm-2 align-self-center mb-0'
              id='nom'
            >
              nom :
            </span>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='nom'
                required
                value={citoyen.nom}
                onChange={handleInputChange}
                name='nom'
                aria-describedby='nom'
                placeholder='nom'
              />
            </div>
          </div>
          {/* prenom */}
          <div className='form-group row'>
            <span
              htmlFor='prenom'
              className='control-label col-sm-2 align-self-center mb-0'
              id='prenom'
            >
              prenom
            </span>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='prenom'
                required
                value={citoyen.prenom}
                onChange={handleInputChange}
                name='prenom'
                placeholder='prenom'
              />
            </div>
          </div>
          {/* date_naissance */}
          <div className='form-group row'>
            <span
              htmlFor='date_naissance'
              className='control-label col-sm-2 align-self-center mb-0'
              id='date_naissance'
            >
              date_naissance :
            </span>
            <div className='col-sm-10'>
              <input
                type='date'
                className='form-control'
                id='date_naissance'
                required
                value={citoyen.date_naissance}
                onChange={handleInputChange}
                name='date_naissance'
                aria-describedby='date_naissance'
              />
            </div>
          </div>
          {/* adress_naissance */}
          <div className='form-group row'>
            <span
              htmlFor='adress_naissance'
              className='control-label col-sm-2 align-self-center mb-0'
              id='adress_naissance'
            >
              adress_naissance :
            </span>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='adress_naissance'
                required
                value={citoyen.adress_naissance}
                onChange={handleInputChange}
                name='adress_naissance'
                placeholder='adress_naissance'
              />
            </div>
          </div>
          <div className='form-group row'>
            <span
              htmlFor='sexe'
              className='control-label col-sm-2 align-self-center mb-0'
              id='sexe'
            >
              sexe :
            </span>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='sexe'
                required
                value={citoyen.sexe}
                onChange={handleInputChange}
                name='sexe'
                aria-describedby='sexe'
                placeholder='sexe'
              />
            </div>
          </div>
          <div className='form-group row'>
            <span
              htmlFor='nom_pere'
              className='control-label col-sm-2 align-self-center mb-0'
              id='nom_pere'
            >
              nom pere :
            </span>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='nom_pere'
                required
                value={citoyen.nom_pere}
                onChange={handleInputChange}
                name='nom_pere'
                aria-describedby='nom_pere'
                placeholder='nom_pere'
              />
            </div>
          </div>
          <div className='form-group row'>
            <span
              htmlFor='nom_mere'
              className='control-label col-sm-2 align-self-center mb-0'
              id='nom_mere'
            >
              nom mere :
            </span>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='nom_mere'
                required
                value={citoyen.nom_mere}
                onChange={handleInputChange}
                name='nom_mere'
                aria-describedby='nom_mere'
                placeholder='nom_mere'
              />
            </div>
          </div>
          <div className='form-group row'>
            <span
              htmlFor='remarque'
              className='control-label col-sm-2 align-self-center mb-0'
              id='remarque'
            >
              Remerque :
            </span>
            <div className='col-sm-10'>
              <textarea
                type='text'
                className='form-control'
                id='remarque'
                value={citoyen.remarque}
                onChange={handleInputChange}
                name='remarque'
                aria-describedby='remarque'
                placeholder='remarque'
              />
            </div>
          </div>
          <div className='form-group row'>
            <span
              htmlFor='cin_pere'
              className='control-label col-sm-2 align-self-center mb-0'
              id='cin_pere'
            >
              cin pere :
            </span>
            <div className='col-sm-10'>
              <input
                type='int'
                className='form-control'
                id='cin_pere'
                required
                value={citoyen.cin_pere}
                onChange={handleInputChange}
                name='cin_pere'
                aria-describedby='cin_pere'
                placeholder='cin_pere'
              />
            </div>
          </div>
          <div className='form-group row'>
            <span
              htmlFor='cin_mere'
              className='control-label col-sm-2 align-self-center mb-0'
              id='cin_mere'
            >
              cin mere :
            </span>
            <div className='col-sm-10'>
              <input
                type='int'
                className='form-control'
                id='cin_mere'
                required
                value={citoyen.cin_mere}
                onChange={handleInputChange}
                name='cin_mere'
                aria-describedby='cin_mere'
                placeholder='cin_mere'
              />
            </div>
          </div>
          <div className='form-group row'>
            <span
              htmlFor='declaration_accouchement'
              className='control-label col-sm-2 align-self-center mb-0'
              id='declaration_accouchement'
            >
              declaration accouchement :
            </span>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='declaration_accouchement'
                required
                value={citoyen.declaration_accouchement}
                onChange={handleInputChange}
                name='declaration_accouchement'
                aria-describedby='declaration_accouchement'
                placeholder='declaration_accouchement'
              />
            </div>
          </div>
          <div className='form-group row'>
            <span
              htmlFor='declaration_hopital'
              className='control-label col-sm-2 align-self-center mb-0'
              id='declaration_hopital'
            >
              declaration hopital :
            </span>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='declaration_hopital'
                required
                value={citoyen.declaration_hopital}
                onChange={handleInputChange}
                name='declaration_hopital'
                aria-describedby='declaration_hopital'
                placeholder='declaration_hopital'
              />
            </div>
          </div>
          <div className='form-group row'>
            <span
              htmlFor='assistant_accouchement'
              className='control-label col-sm-2 align-self-center mb-0'
              id='assistant_accouchement'
            >
              assistant accouchement :
            </span>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='assistant_accouchement'
                required
                value={citoyen.assistant_accouchement}
                onChange={handleInputChange}
                name='assistant_accouchement'
                aria-describedby='assistant_accouchement'
                placeholder='assistant_accouchement'
              />
            </div>
          </div>
          <div className='form-group row'>
            <span
              htmlFor='livret_familial'
              className='control-label col-sm-2 align-self-center mb-0'
              id='livret_familial'
            >
              livret familial :
            </span>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='livret_familial'
                value={citoyen.livret_familial}
                onChange={handleInputChange}
                name='livret_familial'
                aria-describedby='livret_familial'
                placeholder='livret_familial'
              />
            </div>
          </div>
          <button onClick={saveCitoyen} className='btn btn-primary'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddCitoyen
