import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DechetDataService from '../../services/dechet.service'
const EditDechet = (props) => {
  let { id } = useParams()
  const initialDechetState = {
    id: null,
    titre: '',
    description: '',
    quantite: '',
    date_elv: '',
    etat: 0,
  }
  const [currentDechet, setCurrentDechet] = useState(initialDechetState)
  const [message, setMessage] = useState('')

  const getDechet = (id) => {
    DechetDataService.get(id)
      .then((response) => {
        setCurrentDechet(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getDechet(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentDechet({ ...currentDechet, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentDechet.id,
      titre: currentDechet.titre,
      description: currentDechet.description,
      quantite: currentDechet.quantite,
      date_elv: currentDechet.date_elv,
    }
    DechetDataService.update(currentDechet.id, data)
      .then((response) => {
        setCurrentDechet({ ...currentDechet, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateDechet = () => {
    DechetDataService.update(currentDechet.id, currentDechet)
      .then((response) => {
        console.log(response.data)
        setMessage('The Dechets was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentDechet ? (
        <div className='edit-form'>
          <h4>Dechets</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='titre'>titre</label>
              <input
                type='text'
                className='form-control'
                id='titre'
                value={currentDechet.titre}
                name='titre'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='description'>description</label>
              <input
                type='text'
                className='form-control'
                id='description'
                value={currentDechet.description}
                name='description'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='date_elv'>date elv</label>
              <input
                type='date'
                className='form-control'
                id='date_elv'
                value={currentDechet.date_elv}
                onChange={handleInputChange}
                name='date_elv'
              />
            </div>
            <div className='form-group'>
              <label>
                <strong>Status:</strong>
              </label>
              {currentDechet.etat === 1
                ? 'date fixé avec succer'
                : 'En cours de traitement'}
            </div>
          </form>
          {currentDechet.etat === 1 ? (
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
              date fixé avec succé
            </button>
          )}
          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateDechet}
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
export default EditDechet
