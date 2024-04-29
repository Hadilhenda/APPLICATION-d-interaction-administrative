import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GouvernoratDataService from '../../services/gouvernorat.service'
const EditGouvernorat = (props) => {
  let { id } = useParams()
  const initialGouvernoratState = {
    id: null,
    image: '',
    gouvern: '',
    code: '',
    creation: '',
    population: '',
    superficie: '',
    delegation: '',
    municipalite: '',
    imadas: '',
    note: ''
  }
  const [currentGouvernorat, setCurrentGouvernorat] = useState(
    initialGouvernoratState
  )
  const [message, setMessage] = useState('')

  const getGouvernorat = (id) => {
    GouvernoratDataService.get(id)
      .then((response) => {
        setCurrentGouvernorat(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getGouvernorat(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentGouvernorat({ ...currentGouvernorat, [name]: value })
  }

  const updateGouvernorat = () => {
    GouvernoratDataService.update(currentGouvernorat.id, currentGouvernorat)
      .then((response) => {
        console.log(response.data)
        setMessage('The Gouvernorat was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentGouvernorat ? (
        <div className='edit-form'>
          <h4>Gouvernorat</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='image'>image</label>
              <input
                type='text'
                className='form-control'
                id='image'
                value={currentGouvernorat.image}
                onChange={handleInputChange}
                name='image'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='gouvern'>gouvern</label>
              <input
                type='text'
                className='form-control'
                id='gouvern'
                value={currentGouvernorat.gouvern}
                onChange={handleInputChange}
                name='gouvern'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='code'>code</label>
              <input
                type='text'
                className='form-control'
                id='code'
                value={currentGouvernorat.code}
                onChange={handleInputChange}
                name='code'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='creation'>creation</label>
              <input
                type='text'
                className='form-control'
                id='creation'
                value={currentGouvernorat.creation}
                onChange={handleInputChange}
                name='creation'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='population'>population</label>
              <input
                type='int'
                className='form-control'
                id='population'
                value={currentGouvernorat.population}
                onChange={handleInputChange}
                name='population'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='superficie'>superficie</label>
              <input
                type='text'
                className='form-control'
                id='superficie'
                value={currentGouvernorat.superficie}
                onChange={handleInputChange}
                name='superficie'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='delegation'>delegation</label>
              <input
                type='int'
                className='form-control'
                id='delegation'
                value={currentGouvernorat.delegation}
                onChange={handleInputChange}
                name='delegation'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='imadas'>imadas</label>
              <input
                type='text'
                className='form-control'
                id='imadas'
                value={currentGouvernorat.imadas}
                onChange={handleInputChange}
                name='imadas'
              />
              <div className='form-group'>
                <label htmlFor='municipalite'>municipalite</label>
                <input
                  type='text'
                  className='form-control'
                  id='municipalite'
                  value={currentGouvernorat.municipalite}
                  onChange={handleInputChange}
                  name='municipalite'
                />
              </div>
            </div>
          </form>

          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateGouvernorat}
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
export default EditGouvernorat
