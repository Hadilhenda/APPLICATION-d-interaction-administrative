import React, { useState } from 'react'
import ReunionDataService from '../../services/reunion.service'
const AddReunion = () => {
  const initialReunionState = {
    id: null,
    object: '',
    date: '',
    heure: '',
  }
  const [reunion, setReunion] = useState(initialReunionState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setReunion({ ...reunion, [name]: value })
  }
  const saveReunion = () => {
    var data = {
      object: reunion.object,
      date: reunion.date,
      heure: reunion.heure,
    }
    ReunionDataService.create(data)
      .then((response) => {
        setReunion({
          id: response.data.id,
          object: response.data.object,
          date: response.data.date,
          heure: response.data.heure,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newReunion = () => {
    setReunion(initialReunionState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newReunion}>
            New One
          </button>
        </div>
      ) : (
        <div>
          <div className='form-group row'>
            <span
              htmlFor='object'
              className='control-label col-sm-2 align-self-center mb-0'
              id='object'
            >
              object :
            </span>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='object'
                required
                // value={this.state.titre}
                value={reunion.object}
                // onChange={this.onChangeTitre}
                onChange={handleInputChange}
                name='object'
                aria-describedby='object'
              />
            </div>
          </div>

          <div className='form-group row'>
            <span
              htmlFor='date'
              className='control-label col-sm-2 align-self-center mb-0'
              id='date'
            >
              date :
            </span>
            <div className='col-sm-10'>
              <input
                type='date'
                className='form-control'
                id='date'
                required
                value={reunion.date}
                onChange={handleInputChange}
                name='date'
                placeholder='date'
              />
            </div>
          </div>
          <div className='form-group row'>
            <span
              htmlFor='heure'
              className='control-label col-sm-2 align-self-center mb-0'
              id='heure'
            >
              heure :
            </span>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='heure'
                required
                value={reunion.heure}
                onChange={handleInputChange}
                name='heure'
                aria-describedby='heure'
              />
            </div>
          </div>
          <button onClick={saveReunion} className='btn btn-primary'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddReunion
