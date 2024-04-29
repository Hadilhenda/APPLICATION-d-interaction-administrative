import React, { useState } from 'react'
import Responsable_hopDataService from '../../services/responsable_hop.service'
const AddResponsable_hop = () => {
  const initialResponsable_hopState = {
    id: null,
    diplome: '',
    specialite: '',
    salaire: '',
    mission: '',
  }
  const [responsable_hop, setResponsable_hop] = useState(
    initialResponsable_hopState
  )
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setResponsable_hop({ ...responsable_hop, [name]: value })
  }
  const saveResponsable_hop = () => {
    var data = {
      diplome: responsable_hop.diplome,
      specialite: responsable_hop.specialite,
      salaire: responsable_hop.salaire,
      mission: responsable_hop.mission,
    }
    Responsable_hopDataService.create(data)
      .then((response) => {
        setResponsable_hop({
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

  const newResponsable_hop = () => {
    setResponsable_hop(initialResponsable_hopState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newResponsable_hop}>
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
              value={responsable_hop.diplome}
              // onChange={this.onChangeTitre}
              onChange={handleInputChange}
              name='diplome'
              aria-describedby='diplome'
            />
          </div>

          <div className='input-group mb-3'>
            <span
              htmlFor='specialite'
              className='input-group-text'
              id='specialite'
            >
              specialite
            </span>
            <input
              type='text'
              className='form-control'
              id='specialite'
              required
              value={responsable_hop.specialite}
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
              value={responsable_hop.salaire}
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
              value={responsable_hop.mission}
              onChange={handleInputChange}
              name='mission'
              placeholder='mission'
            />
          </div>

          <button onClick={saveResponsable_hop} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddResponsable_hop
