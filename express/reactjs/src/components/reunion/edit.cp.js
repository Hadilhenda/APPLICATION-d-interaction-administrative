import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReunionDataService from '../../services/reunion.service'
const EditReunion = (props) => {
  let { id } = useParams()
  const initialReunionState = {
    id: null,
    object: '',
    date: '',
    heure: '',
  }
  const [currentReunion, setCurrentReunion] = useState(initialReunionState)
  const [message, setMessage] = useState('')

  const getReunion = (id) => {
    ReunionDataService.get(id)
      .then((response) => {
        setCurrentReunion(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getReunion(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentReunion({ ...currentReunion, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentReunion.id,
      object: currentReunion.object,
      date: currentReunion.date,
      heure: currentReunion.heure,
    }
    ReunionDataService.update(currentReunion.id, data)
      .then((response) => {
        setCurrentReunion({ ...currentReunion, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateReunion = () => {
    ReunionDataService.update(currentReunion.id, currentReunion)
      .then((response) => {
        console.log(response.data)
        setMessage('The Reunion was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentReunion ? (
        <div className='edit-form'>
          <h4>Reunion</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='object'>object</label>
              <input
                type='text'
                className='form-control'
                id='object'
                value={currentReunion.object}
                onChange={handleInputChange}
                name='object'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='date'>date</label>
              <input
                type='text'
                className='form-control'
                id='date'
                value={currentReunion.date}
                onChange={handleInputChange}
                name='date'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='heure'>heure</label>
              <input
                type='text'
                className='form-control'
                id='heure'
                value={currentReunion.heure}
                onChange={handleInputChange}
                name='heure'
              />
            </div>
          </form>

          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateReunion}
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
export default EditReunion
