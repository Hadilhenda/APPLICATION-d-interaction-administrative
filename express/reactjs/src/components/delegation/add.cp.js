import React, { useState } from 'react'
import DelegationDataService from '../../services/delegation.service'
const AddDelegation = () => {
  const initialDelegationState = {
    id: null,
    titre: '',
    population: '',
    id_gouv: '',
  }
  const [delegation, setDelegation] = useState(initialDelegationState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setDelegation({ ...delegation, [name]: value })
  }
  const saveDelegation = () => {
    var data = {
      titre: delegation.titre,
      population: delegation.population,
      id_gouv: delegation.id_gouv,
      mission: delegation.mission,
    }
    DelegationDataService.create(data)
      .then((response) => {
        setDelegation({
          id: response.data.id,
          titre: response.data.titre,
          population: response.data.population,
          id_gouv: response.data.id_gouv,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newDelegation = () => {
    setDelegation(initialDelegationState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newDelegation}>
            New One
          </button>
        </div>
      ) : (
        <div>
          <div className='input-group mb-3'>
            <span htmlFor='titre' className='input-group-text' id='titre'>
              titre
            </span>
            <input
              type='text'
              className='form-control'
              id='titre'
              required
              // value={this.state.titre}
              value={delegation.titre}
              // onChange={this.onChangeTitre}
              onChange={handleInputChange}
              name='titre'
              aria-describedby='titre'
            />
          </div>

          <div className='input-group mb-3'>
            <span htmlFor='population' className='input-group-text' id='population'>
              population
            </span>
            <input
              type='int'
              className='form-control'
              id='population'
              required
              value={delegation.population}
              onChange={handleInputChange}
              name='population'
              placeholder='population'
            />
          </div>
          <div className='input-group mb-3'>
            <span htmlFor='id_gouv' className='input-group-text' id='id_gouv'>
              id_gouv
            </span>
            <input
              type='int'
              className='form-control'
              id='id_gouv'
              required
              value={delegation.id_gouv}
              onChange={handleInputChange}
              name='id_gouv'
              aria-describedby='id_gouv'
            />
          </div>

          <button onClick={saveDelegation} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddDelegation
