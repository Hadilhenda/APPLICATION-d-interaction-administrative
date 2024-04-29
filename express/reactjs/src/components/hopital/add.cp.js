import React, { useState } from 'react'
import HopitalDataService from '../../services/hopital.service'
const AddHopital = () => {
  const initialHopitalState = {
    id: null,
    tel: '',
    email: '',
  }
  const [hopital, setHopital] = useState(initialHopitalState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setHopital({ ...hopital, [name]: value })
  }
  const saveHopital = () => {
    var data = {
      tel: hopital.tel,
      email: hopital.email,
    }
    HopitalDataService.create(data)
      .then((response) => {
        setHopital({
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

  const newHopital = () => {
    setHopital(initialHopitalState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newHopital}>
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
              value={hopital.tel}
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
              value={hopital.email}
              onChange={handleInputChange}
              name='email'
              placeholder='email'
            />
          </div>

          <button onClick={saveHopital} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddHopital
