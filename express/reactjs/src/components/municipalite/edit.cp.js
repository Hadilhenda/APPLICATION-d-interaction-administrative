import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MunicipaliteDataService from '../../services/municipalite.service'
const EditMunicipalite = (props) => {
  let { id } = useParams()
  const initialMunicipaliteState = {
    id: null,
    tel: '',
    email: '',
    
  }
  const [currentMunicipalite, setCurrentMunicipalite] = useState(
    initialMunicipaliteState
  )
  const [message, setMessage] = useState('')

  const getMunicipalite = (id) => {
    MunicipaliteDataService.get(id)
      .then((response) => {
        setCurrentMunicipalite(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getMunicipalite(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentMunicipalite({ ...currentMunicipalite, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentMunicipalite.id,
      tel: currentMunicipalite.tel,
      email: currentMunicipalite.email,
    }
    MunicipaliteDataService.update(currentMunicipalite.id, data)
      .then((response) => {
        setCurrentMunicipalite({ ...currentMunicipalite, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateMunicipalite = () => {
    MunicipaliteDataService.update(currentMunicipalite.id, currentMunicipalite)
      .then((response) => {
        console.log(response.data)
        setMessage('The Municipalite was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentMunicipalite ? (
        <div className='edit-form'>
          <h4>Municipalite</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='tel'>Telephone</label>
              <input
                type='text'
                className='form-control'
                id='tel'
                value={currentMunicipalite.tel}
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
                value={currentMunicipalite.email}
                onChange={handleInputChange}
                name='email'
              />
            </div>
          </form>

          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateMunicipalite}
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
export default EditMunicipalite
