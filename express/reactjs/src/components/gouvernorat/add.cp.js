import React, { useState } from 'react'
import GouvernoratDataService from '../../services/gouvernorat.service'
const AddGouvernorat = () => {
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
    note: '',
  }
  const [gouvernorat, setGouvernorat] = useState(initialGouvernoratState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setGouvernorat({ ...gouvernorat, [name]: value })
  }
  const saveGouvernorat = () => {
    var data = {
      image: gouvernorat.image,
      gouvern: gouvernorat.gouvern,
      code: gouvernorat.code,
      creation: gouvernorat.creation,
      population: gouvernorat.population,
      superficie: gouvernorat.superficie,
      delegation: gouvernorat.delegation,
      municipalite: gouvernorat.municipalite,
      imadas: gouvernorat.imadas,
      note: gouvernorat.note,
    }
    GouvernoratDataService.create(data)
      .then((response) => {
        setGouvernorat({
          id: response.data.id,
          image: response.data.image,
          gouvern: response.data.gouvern,
          code: response.data.code,
          creation: response.data.creation,
          population: response.data.population,
          superficie: response.data.superficie,
          delegation: response.data.delegation,
          municipalite: response.data.municipalite,
          imadas: response.data.imadas,
          note: response.data.note,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newGouvernorat = () => {
    setGouvernorat(initialGouvernoratState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newGouvernorat}>
            New One
          </button>
        </div>
      ) : (
        <div>
          <div className='input-group mb-3'>
            <span htmlFor='image' className='input-group-text' id='image'>
              image
            </span>
            <input
              type='file'
              className='form-control'
              id='image'
              required
              // value={this.state.titre}
              value={gouvernorat.image}
              // onChange={this.onChangeTitre}
              onChange={handleInputChange}
              name='image'
              aria-describedby='image'
            />
          </div>

          <div className='input-group mb-3'>
            <span htmlFor='gouvern' className='input-group-text' id='gouvern'>
              gouvernorat
            </span>
            <input
              type='text'
              className='form-control'
              id='gouvern'
              required
              value={gouvernorat.gouvern}
              onChange={handleInputChange}
              name='gouvern'
              placeholder='gouvern'
            />
          </div>
          <div className='input-group mb-3'>
            <span htmlFor='code' className='input-group-text' id='code'>
              code
            </span>
            <input
              type='text'
              className='form-control'
              id='code'
              required
              value={gouvernorat.code}
              onChange={handleInputChange}
              name='code'
              aria-describedby='code'
            />
          </div>

          <div className='input-group mb-3'>
            <span htmlFor='creation' className='input-group-text' id='creation'>
              creation
            </span>
            <input
              type='text'
              className='form-control'
              id='creation'
              required
              value={gouvernorat.creation}
              onChange={handleInputChange}
              name='creation'
              placeholder='creation'
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
              // value={this.state.titre}
              value={gouvernorat.population}
              // onChange={this.onChangeTitre}
              onChange={handleInputChange}
              name='population'
              aria-describedby='population'
            />
          </div>

          <div className='input-group mb-3'>
            <span htmlFor='superficie' className='input-group-text' id='superficie'>
              superficie
            </span>
            <input
              type='int'
              className='form-control'
              id='superficie'
              required
              value={gouvernorat.superficie}
              onChange={handleInputChange}
              name='superficie'
              placeholder='superficie'
            />
          </div>
          <div className='input-group mb-3'>
            <span htmlFor='delegation' className='input-group-text' id='delegation'>
              delegation
            </span>
            <input
              type='int'
              className='form-control'
              id='delegation'
              required
              value={gouvernorat.delegation}
              onChange={handleInputChange}
              name='delegation'
              aria-describedby='delegation'
            />
          </div>
          <div className='input-group mb-3'>
            <span
              htmlFor='municipalite'
              className='input-group-text'
              id='municipalite'
            >
              municipalite
            </span>
            <input
              type='int'
              className='form-control'
              id='municipalite'
              required
              value={gouvernorat.municipalite}
              onChange={handleInputChange}
              name='municipalite'
              aria-describedby='municipalite'
            />
          </div>

          <div className='input-group mb-3'>
            <span htmlFor='imadas' className='input-group-text' id='imadas'>
              imadas
            </span>
            <input
              type='int'
              className='form-control'
              id='imadas'
              required
              value={gouvernorat.imadas}
              onChange={handleInputChange}
              name='imadas'
              aria-describedby='imadas'
            />
          </div>

          <div className='input-group mb-3'>
            <span htmlFor='note' className='input-group-text' id='note'>
              note
            </span>
            <input
              type='int'
              className='form-control'
              id='note'
              required
              value={gouvernorat.note}
              onChange={handleInputChange}
              name='note'
              aria-describedby='note'
            />
          </div>

          <button onClick={saveGouvernorat} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddGouvernorat
