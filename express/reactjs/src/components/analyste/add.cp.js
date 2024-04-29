import React, { useState } from 'react'
import AnalysteDataService from '../../services/analyste.service'
const AddAnalyste = () => {
  const initialAnalysteState = {
    id: null,
    diplome: '',
    specialite: '',
    salaire: '',
    mission: '',
  }
  const [analyste, setAnalyste] = useState(initialAnalysteState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setAnalyste({ ...analyste, [name]: value })
  }
  const saveAnalyste = () => {
    var data = {
      diplome: analyste.diplome,
      specialite: analyste.specialite,
      salaire: analyste.salaire,
      mission: analyste.mission,
    }
    AnalysteDataService.create(data)
      .then((response) => {
        setAnalyste({
          id: response.data.id,
          diplome: response.data.diplome,
          specialite: response.data.specialite,
          salaire: response.data.salaire,
          mission: response.data.mission,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newAnalyste = () => {
    setAnalyste(initialAnalysteState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newAnalyste}>
            New One
          </button>
        </div>
      ) : (
        <div>
          <div className='input-group mb-3'>
            <span htmlFor='diplome' className='input-group-text' id='diplome'>
              diplome
            </span>
            <input
              type='text'
              className='form-control'
              id='diplome'
              required
              // value={this.state.titre}
              value={analyste.diplome}
              // onChange={this.onChangeTitre}
              onChange={handleInputChange}
              name='diplome'
              aria-describedby='diplome'
            />
          </div>

          <div className='input-group mb-3'>
            <span htmlFor='specialite' className='input-group-text' id='specialite'>
              specialite
            </span>
            <input
              type='text'
              className='form-control'
              id='specialite'
              required
              value={analyste.specialite}
              onChange={handleInputChange}
              name='specialite'
              placeholder='specialite'
            />
          </div>
          <div className='input-group mb-3'>
            <span htmlFor='salaire' className='input-group-text' id='salaire'>
              salaire
            </span>
            <input
              type='text'
              className='form-control'
              id='salaire'
              required
              value={analyste.salaire}
              onChange={handleInputChange}
              name='salaire'
              aria-describedby='salaire'
            />
          </div>

          <div className='input-group mb-3'>
            <span htmlFor='mission' className='input-group-text' id='mission'>
              mission
            </span>
            <input
              type='text'
              className='form-control'
              id='mission'
              required
              value={analyste.mission}
              onChange={handleInputChange}
              name='mission'
              placeholder='mission'
            />
          </div>

          <button onClick={saveAnalyste} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddAnalyste
