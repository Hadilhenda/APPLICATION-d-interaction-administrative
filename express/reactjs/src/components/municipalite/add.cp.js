import React, { useState } from 'react'
import MunicipaliteDataService from '../../services/municipalite.service'
const AddMunicipalite = () => {
  const initialMunicipaliteState = {
    id: null,
    tel: '',
    email: '',
  }
  const [municipalite, setMunicipalite] = useState(initialMunicipaliteState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setMunicipalite({ ...municipalite, [name]: value })
  }
  const saveMunicipalite = () => {
    var data = {
      tel: municipalite.tel,
      email: municipalite.email,
    }
    MunicipaliteDataService.create(data)
      .then((response) => {
        setMunicipalite({
          id: response.data.id,
          tel: response.data.tel,
          email: response.data.email,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newMunicipalite = () => {
    setMunicipalite(initialMunicipaliteState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newMunicipalite}>
            New One
          </button>
        </div>
      ) : (
        <div>
          <div className='input-group mb-3'>
            <span htmlFor='tel' className='input-group-text' id='tel'>
              telephone
            </span>
            <input
              type='text'
              className='form-control'
              id='tel'
              required
              // value={this.state.titre}
              value={municipalite.tel}
              // onChange={this.onChangeTitre}
              onChange={handleInputChange}
              name='tel'
              aria-describedby='tel'
            />
          </div>

          <div className='input-group mb-3'>
            <span htmlFor='email' className='input-group-text' id='email'>
              Email
            </span>
            <input
              type='text'
              className='form-control'
              id='email'
              required
              value={municipalite.email}
              onChange={handleInputChange}
              name='email'
              placeholder='email'
            />
          </div>

          <button onClick={saveMunicipalite} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddMunicipalite
