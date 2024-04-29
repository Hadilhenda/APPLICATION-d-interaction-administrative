import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CitoyenDataService from '../../services/citoyen.service'
const ValiderinfoCitoyen = (props) => {
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
  }
  const [currentCitoyen, setCurrentCitoyen] = useState(initialCitoyenState)
  const [message, setMessage] = useState('')

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
      // date_mort: currentCitoyen.date_mort,
      // cause_mort: currentCitoyen.cause_mort,
      declaration_accouchement: currentCitoyen.declaration_accouchement,
      declaration_hopital: currentCitoyen.declaration_hopital,
      assistant_accouchement: currentCitoyen.assistant_accouchement,
      cin_pere: currentCitoyen.cin_pere,
      cin_mere: currentCitoyen.cin_mere,
      livret_familial: currentCitoyen.livret_familial,
      // assistant_mort: currentCitoyen.assistant_mort,
      // date_enterement: currentCitoyen.date_enterement,
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
            <div>
              {/* nom */}
              <div className='input-group mb-3'>
                <span htmlFor='nom' className='input-group-text' id='nom'>
                  nom
                </span>
                <input
                  type='text'
                  className='form-control'
                  id='nom'
                  required
                  value={currentCitoyen.nom}
                  onChange={handleInputChange}
                  name='nom'
                  aria-describedby='nom'
                  placeholder='nom'
                />
              </div>
              {/* prenom */}
              <div className='input-group mb-3'>
                <span htmlFor='prenom' className='input-group-text' id='prenom'>
                  prenom
                </span>
                <input
                  type='text'
                  className='form-control'
                  id='prenom'
                  required
                  value={currentCitoyen.prenom}
                  onChange={handleInputChange}
                  name='prenom'
                  placeholder='prenom'
                />
              </div>
              {/* date_naissance */}
              <div className='input-group mb-3'>
                <span
                  htmlFor='date_naissance'
                  className='input-group-text'
                  id='date_naissance'
                >
                  date_naissance
                </span>
                <input
                  type='text'
                  className='form-control'
                  id='date_naissance'
                  required
                  value={currentCitoyen.date_naissance}
                  onChange={handleInputChange}
                  name='date_naissance'
                  aria-describedby='date_naissance'
                />
              </div>
              {/* adress_naissance */}
              <div className='input-group mb-3'>
                <span
                  htmlFor='adress_naissance'
                  className='input-group-text'
                  id='adress_naissance'
                >
                  adress_naissance
                </span>
                <input
                  type='text'
                  className='form-control'
                  id='adress_naissance'
                  required
                  value={currentCitoyen.adress_naissance}
                  onChange={handleInputChange}
                  name='adress_naissance'
                  placeholder='adress_naissance'
                />
              </div>
              <div className='input-group mb-3'>
                <span htmlFor='sexe' className='input-group-text' id='sexe'>
                  sexe
                </span>
                <input
                  type='text'
                  className='form-control'
                  id='sexe'
                  required
                  value={currentCitoyen.sexe}
                  onChange={handleInputChange}
                  name='sexe'
                  aria-describedby='sexe'
                  placeholder='sexe'
                />
              </div>
              <div className='input-group mb-3'>
                <span htmlFor='nom_pere' className='input-group-text' id='nom_pere'>
                  nom pere
                </span>
                <input
                  type='text'
                  className='form-control'
                  id='nom_pere'
                  required
                  value={currentCitoyen.nom_pere}
                  onChange={handleInputChange}
                  name='nom_pere'
                  aria-describedby='nom_pere'
                  placeholder='nom_pere'
                />
              </div>
              <div className='input-group mb-3'>
                <span htmlFor='nom_mere' className='input-group-text' id='nom_mere'>
                  nom mere
                </span>
                <input
                  type='text'
                  className='form-control'
                  id='nom_mere'
                  required
                  value={currentCitoyen.nom_mere}
                  onChange={handleInputChange}
                  name='nom_mere'
                  aria-describedby='nom_mere'
                  placeholder='nom_mere'
                />
              </div>
              <div className='input-group mb-3'>
                <span htmlFor='remarque' className='input-group-text' id='remarque'>
                  Remerque
                </span>
                <textarea
                  type='text'
                  className='form-control'
                  id='remarque'
                  required
                  value={currentCitoyen.remarque}
                  onChange={handleInputChange}
                  name='remarque'
                  aria-describedby='remarque'
                  placeholder='remarque'
                />
              </div>
              <div className='input-group mb-3'>
                <span htmlFor='cin_pere' className='input-group-text' id='cin_pere'>
                  cin pere
                </span>
                <input
                  type='int'
                  className='form-control'
                  id='cin_pere'
                  required
                  value={currentCitoyen.cin_pere}
                  onChange={handleInputChange}
                  name='cin_pere'
                  aria-describedby='cin_pere'
                  placeholder='cin_pere'
                />
              </div>
              <div className='input-group mb-3'>
                <span htmlFor='cin_mere' className='input-group-text' id='cin_mere'>
                  cin mere
                </span>
                <input
                  type='int'
                  className='form-control'
                  id='cin_mere'
                  required
                  value={currentCitoyen.cin_mere}
                  onChange={handleInputChange}
                  name='cin_mere'
                  aria-describedby='cin_mere'
                  placeholder='cin_mere'
                />
              </div>
              <div className='input-group mb-3'>
                <span
                  htmlFor='declaration_accouchement'
                  className='input-group-text'
                  id='declaration_accouchement'
                >
                  declaration accouchement
                </span>
                <input
                  type='text'
                  className='form-control'
                  id='declaration_accouchement'
                  required
                  value={currentCitoyen.declaration_accouchement}
                  onChange={handleInputChange}
                  name='declaration_accouchement'
                  aria-describedby='declaration_accouchement'
                  placeholder='declaration_accouchement'
                />
              </div>
              <div className='input-group mb-3'>
                <span
                  htmlFor='declaration_hopital'
                  className='input-group-text'
                  id='declaration_hopital'
                >
                  declaration hopital
                </span>
                <input
                  type='text'
                  className='form-control'
                  id='declaration_hopital'
                  required
                  value={currentCitoyen.declaration_hopital}
                  onChange={handleInputChange}
                  name='declaration_hopital'
                  aria-describedby='declaration_hopital'
                  placeholder='declaration_hopital'
                />
              </div>
              <div className='input-group mb-3'>
                <span
                  htmlFor='assistant_accouchement'
                  className='input-group-text'
                  id='assistant_accouchement'
                >
                  assistant accouchement
                </span>
                <input
                  type='text'
                  className='form-control'
                  id='assistant_accouchement'
                  required
                  value={currentCitoyen.assistant_accouchement}
                  onChange={handleInputChange}
                  name='assistant_accouchement'
                  aria-describedby='assistant_accouchement'
                  placeholder='assistant_accouchement'
                />
              </div>
              <div className='input-group mb-3'>
                <span
                  htmlFor='livret_familial'
                  className='input-group-text'
                  id='livret_familial'
                >
                  livret familial
                </span>
                <input
                  type='text'
                  className='form-control'
                  id='livret_familial'
                  required
                  value={currentCitoyen.livret_familial}
                  onChange={handleInputChange}
                  name='livret_familial'
                  aria-describedby='livret_familial'
                  placeholder='livret_familial'
                />
              </div>
            </div>

            <div className='form-group'>
              <label>
                <strong>Status:</strong>
              </label>
              {currentCitoyen.etat === 2 ? 'A corriger' : 'En attente'}
            </div>
          </form>
          {currentCitoyen.etat === 2 ? (
            <button
              className='m-3 btn btn-sm btn-info btn-rounded'
              onClick={() => updatePublished(0)}
            >
              En attente
            </button>
          ) : (
            <button
              className='m-3 btn btn-sm btn-success btn-rounded'
              onClick={() => updatePublished(2)}
            >
              A corriger
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
export default ValiderinfoCitoyen
