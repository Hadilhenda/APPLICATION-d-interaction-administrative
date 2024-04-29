import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AnalysteDataService from '../../services/analyste.service'
const EditAnalyste = (props) => {
  let { id } = useParams()
  const initialAnalysteState = {
    id: null,
    diplome: '',
    specialite: '',
    salaire: '',
    mission: '',
  }
  const [currentAnalyste, setCurrentAnalyste] = useState(initialAnalysteState)
  const [message, setMessage] = useState('')

  const getAnalyste = (id) => {
    AnalysteDataService.get(id)
      .then((response) => {
        setCurrentAnalyste(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getAnalyste(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentAnalyste({ ...currentAnalyste, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentAnalyste.id,
      diplome: currentAnalyste.diplome,
      specialite: currentAnalyste.specialite,
      salaire: currentAnalyste.salaire,
      mission: currentAnalyste.mission,
    }
    AnalysteDataService.update(currentAnalyste.id, data)
      .then((response) => {
        setCurrentAnalyste({ ...currentAnalyste, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateAnalyste = () => {
    AnalysteDataService.update(currentAnalyste.id, currentAnalyste)
      .then((response) => {
        console.log(response.data)
        setMessage('The Analyste was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentAnalyste ? (
        <div className='edit-form'>
          <h4>Analyste</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='diplome'>Diplome</label>
              <input
                type='text'
                className='form-control'
                id='diplome'
                value={currentAnalyste.diplome}
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
                value={currentAnalyste.specialite}
                onChange={handleInputChange}
                name='specialite'
              />
            </div>
          </form>

          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateAnalyste}
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
export default EditAnalyste
