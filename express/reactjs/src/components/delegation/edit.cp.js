import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DelegationDataService from '../../services/delegation.service'
const EditDelegation = (props) => {
  let { id } = useParams()
  const initialDelegationState = {
    id: null,
    titre: '',
    population: '',
    id_gouv: '',
  }
  const [currentDelegation, setCurrentDelegation] = useState(
    initialDelegationState
  )
  const [message, setMessage] = useState('')

  const getDelegation = (id) => {
    DelegationDataService.get(id)
      .then((response) => {
        setCurrentDelegation(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getDelegation(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentDelegation({ ...currentDelegation, [name]: value })
  }
  const updatePublished = (status) => {
    var data = {
      id: currentDelegation.id,
      titre: currentDelegation.titre,
      population: currentDelegation.population,
      id_gouv: currentDelegation.id_gouv,
    }

    DelegationDataService.update(currentDelegation.id, data)
      .then((response) => {
        setCurrentDelegation({ ...currentDelegation, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateDelegation = () => {
    DelegationDataService.update(currentDelegation.id, currentDelegation)
      .then((response) => {
        console.log(response.data)
        setMessage('The Delegation was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentDelegation ? (
        <div className='edit-form'>
          <h4>Delegation</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='titre'>titre</label>
              <input
                type='text'
                className='form-control'
                id='titre'
                value={currentDelegation.titre}
                onChange={handleInputChange}
                name='titre'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='population'>population</label>
              <input
                type='int'
                className='form-control'
                id='population'
                value={currentDelegation.population}
                onChange={handleInputChange}
                name='population'
              />
            </div>
          </form>

          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateDelegation}
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
export default EditDelegation
