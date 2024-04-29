import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CitoyenDataService from '../../services/citoyen.service'
const ValideCitoyen = (props) => {
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
            <table
              style={{ textAlign: 'center', border: '1px', width: '100%' }}
              className='table table-bordered table-responsive-md table-striped text-center'
            >
              <tr>
                <th style={{ border: '1px solid black', width: '20%' }}>
                  الإسم
                </th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentCitoyen.nom}
                </td>
              </tr>
              <tr>
                <th style={{ border: '1px solid black' }}>اللقب</th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentCitoyen.prenom}
                </td>
              </tr>
              <tr>
                <th style={{ border: '1px solid black' }}> تاريخ الولادة</th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentCitoyen.date_naissance}
                </td>
              </tr>
              <tr>
                {' '}
                <th style={{ border: '1px solid black' }}>
                  {' '}
                  مكان الولادة
                </th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentCitoyen.adress_naissance}
                </td>
              </tr>
              <tr>
                <th style={{ border: '1px solid black' }}>
                  {' '}
                  جنس المولود (ذكى او انثى){' '}
                </th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentCitoyen.sexe}
                </td>
              </tr>
              <tr>
                {' '}
                <th style={{ border: '1px solid black' }}>
                  {' '}
                  اسم الأب و لقبه
                </th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentCitoyen.nom_pere}
                </td>{' '}
              </tr>
              <tr>
                <th style={{ border: '1px solid black' }}> اسم الأم و لقبها</th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentCitoyen.nom_mere}
                </td>
              </tr>
              <tr>
                <th style={{ border: '1px solid black' }}>
                  {' '}
                  اسم من قام بالإعلام و لقبه
                </th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentCitoyen.declaration_accouchement}
                </td>
              </tr>
              <tr>
                <th style={{ border: '1px solid black' }}> مساعد الولادة</th>
                <td style={{ border: '1px solid black' }}>
                  {currentCitoyen.assistant_accouchement}
                </td>
              </tr>
              <tr>
                <th style={{ border: '1px solid black' }}> دفتر العائلة</th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentCitoyen.livret_familial}
                </td>
              </tr>
            </table>
            <div className='form-group'>
              <label>
                <strong>Status:</strong>
              </label>
              {currentCitoyen.etat === 1 ? 'Valider' : 'En cours de traitement'}
              <div className='form-group'>
              <label>
                <strong>Status:</strong>
              </label>
              {currentCitoyen.etat === 2
                ? 'Male information'
                : 'En cours de traitement'}
            </div>
            </div>
          </form>
          {currentCitoyen.etat === 1 ? (
            <button
              className='m-3 btn btn-sm btn-info btn-rounded'
              onClick={() => updatePublished(0)}
            >
              En cours de traitement
            </button>
          ) : (
            <button
              className='m-3 btn btn-sm btn-success btn-rounded'
              onClick={() => updatePublished(1)}
            >
              Valider
            </button>
          )}
          {currentCitoyen.etat === 0 ? (
            <button
              className='m-3 btn btn-sm btn-danger'
              onClick={() => updatePublished(2)}
            >
              male information
            </button>
          ) : (
            <button
              className='m-3 btn btn-sm btn-warning'
              onClick={() => updatePublished(0)}
            >
              En cours de traitement
            </button>
          )}


          
          <button
            type='submit'
            className='m-3 btn btn-sm btn-success  btn-rounded'
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
export default ValideCitoyen
