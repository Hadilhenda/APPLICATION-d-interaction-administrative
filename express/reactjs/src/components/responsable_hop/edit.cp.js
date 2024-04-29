import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Responsable_hopDataService from '../../services/responsable_hop.service'
const EditResponsable_hop = (props) => {
  let { id } = useParams()
  const initialResponsable_hopState = {
    id: null,
    diplome: '',
    specialite: '',
    salaire: '',
    mission: '',
  }
  const [currentResponsable_hop, setCurrentResponsable_hop] = useState(
    initialResponsable_hopState
  )
  const [message, setMessage] = useState('')

  const getResponsable_hop = (id) => {
    Responsable_hopDataService.get(id)
      .then((response) => {
        setCurrentResponsable_hop(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getResponsable_hop(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentResponsable_hop({ ...currentResponsable_hop, [name]: value })
  }

  const updateResponsable_hop = () => {
    Responsable_hopDataService.update(
      currentResponsable_hop.id,
      currentResponsable_hop
    )
      .then((response) => {
        console.log(response.data)
        setMessage('The Responsable hopital was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentResponsable_hop ? (
        <div className='edit-form'>
          <h4>Responsable hopital </h4>
          <form>
            <div className='form-group'>
              <label htmlFor='diplome'>Diplome</label>
              <input
                type='text'
                className='form-control'
                id='diplome'
                value={currentResponsable_hop.diplome}
                onChange={handleInputChange}
                name='diplome'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='specialite'>Specialite</label>
              <input
                type='text'
                className='form-control'
                id='specialite'
                value={currentResponsable_hop.specialite}
                onChange={handleInputChange}
                name='specialite'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='salaire'>Salaire</label>
              <input
                type='text'
                className='form-control'
                id='salaire'
                value={currentResponsable_hop.salaire}
                onChange={handleInputChange}
                name='salaire'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='mission'>Mission</label>
              <input
                type='text'
                className='form-control'
                id='mission'
                value={currentResponsable_hop.mission}
                onChange={handleInputChange}
                name='mission'
              />
            </div>
          </form>

          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateResponsable_hop}
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
export default EditResponsable_hop
