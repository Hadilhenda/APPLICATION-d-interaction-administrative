import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HopitalDataService from '../../services/hopital.service'
const EditHopital = (props) => {
  let { id } = useParams()
  const initialHopitalState = {
    id: null,
    tel: '',
    email: '',
  }
  const [currentHopital, setCurrentHopital] = useState(initialHopitalState)
  const [message, setMessage] = useState('')

  const getHopital = (id) => {
    HopitalDataService.get(id)
      .then((response) => {
        setCurrentHopital(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getHopital(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentHopital({ ...currentHopital, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentHopital.id,
      tel: currentHopital.tel,
      email: currentHopital.email,
    }
    HopitalDataService.update(currentHopital.id, data)
      .then((response) => {
        setCurrentHopital({ ...currentHopital, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateHopital = () => {
    HopitalDataService.update(currentHopital.id, currentHopital)
      .then((response) => {
        console.log(response.data)
        setMessage('The Hopital was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentHopital ? (
        <div className='edit-form'>
          <h4>Hopital</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='tel'>Telephone</label>
              <input
                type='text'
                className='form-control'
                id='tel'
                value={currentHopital.tel}
                onChange={handleInputChange}
                name='tel'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                className='form-control'
                id='email'
                value={currentHopital.email}
                onChange={handleInputChange}
                name='email'
              />
            </div>
          </form>

          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateHopital}
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
export default EditHopital
