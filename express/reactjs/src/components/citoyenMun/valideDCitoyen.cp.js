import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CitoyenDataService from '../../services/citoyen.service'
const ValideDCitoyen = (props) => {
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

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentCitoyen({ ...currentCitoyen, [name]: value })
  }
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
                  تاريخ الوفاة
                </th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentCitoyen.date_mort}
                </td>{' '}
              </tr>
              <tr>
                <th style={{ border: '1px solid black' }}> مساعد ميت </th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentCitoyen.assistant_mort}
                </td>
              </tr>
              <tr>
                <th style={{ border: '1px solid black' }}> سبب الوفاة </th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentCitoyen.cause_mort}
                </td>
              </tr>
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
                  value={currentCitoyen.date_enterement}
                  onChange={handleInputChange}
                  name='date_enterement'
                  aria-describedby='date_enterement'
                  placeholder='date_enterement'
                />
              </div>
            </table>
            <div className='form-group'>
              <label>
                <strong>Status:</strong>
              </label>
              {currentCitoyen.etat === 4
                ? 'Valider décès'
                : 'En cours de traitement'}
          
            </div>
          </form>
          {currentCitoyen.etat === 4 ? (
            <button
              className='m-3 btn btn-sm btn-info btn-rounded'
              onClick={() => updatePublished(3)}
            >
              En cours de traitement
            </button>
          ) : (
            <button
              className='m-3 btn btn-sm btn-success btn-rounded'
              onClick={() => updatePublished(4)}
            >
              Valider décès
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
export default ValideDCitoyen
