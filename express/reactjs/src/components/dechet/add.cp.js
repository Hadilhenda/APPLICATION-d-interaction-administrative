import React, { useState } from 'react'
import DechetDataService from '../../services/dechet.service'
import { useSelector } from 'react-redux'
const AddDechet = () => {
  const { user: currentUser } = useSelector((state) => state.auth)
  const initialDechetState = {
    id: null,
    titre: '',
    description: '',
    quantite: '',
    date_urgence: '',
    date_elv: '',
    etat: '0',
    id_com: '32',
    id_hop: '',
  }
  const [dechet, setDechet] = useState(initialDechetState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setDechet({ ...dechet, [name]: value })
  }
  const saveDechet = () => {
    var data = {
      titre: dechet.titre,
      description: dechet.description,
      quantite: dechet.quantite,
      date_urgence: dechet.date_urgence,
      date_elv: dechet.date_elv,
      etat: dechet.etat,
      id_com: currentUser.id_com,
      id_hop: currentUser.id,
    }
    DechetDataService.create(data).then((response) => {
      setDechet({
        id: response.data.id,
        titre: response.data.titre,
        description: response.data.description,
        quantite: response.data.quantite,
        date_urgence: response.data.date_urgence,
        date_elv: response.data.elv,
        etat: response.data.etat,
        id_com: response.data.id_com,
        id_hop: currentUser.id,
      })
      setSubmitted(true)
      console.log(response.data)
    })
  }

  const newDechet = () => {
    setDechet(initialDechetState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newDechet}>
            new déchets
          </button>
        </div>
      ) : (
        <div>
          {/* titre */}
          <div className='form-group row'>
            <span
              htmlFor='titre'
              className='control-label col-sm-2 align-self-center mb-0'
              id='titre'
            >
              titre :
            </span>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='titre'
                required
                value={dechet.titre}
                onChange={handleInputChange}
                name='titre'
                aria-describedby='titre'
                placeholder='titre'
              />
            </div>
          </div>
          {/* description */}
          <div className='form-group row'>
            <span
              htmlFor='description'
              className='control-label col-sm-2 align-self-center mb-0'
              id='description'
            >
              description :
            </span>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='description'
                required
                value={dechet.description}
                onChange={handleInputChange}
                name='description'
                placeholder='description'
              />
            </div>
          </div>
          <div className='form-group row'>
            <span
              htmlFor='quantite'
              className='control-label col-sm-2 align-self-center mb-0'
              id='quantite'
            >
              quantite :
            </span>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                id='quantite'
                required
                value={dechet.quantite}
                onChange={handleInputChange}
                name='quantite'
                placeholder='quantite'
              />
            </div>
          </div>
          {/* date_urgence */}
          <div className='form-group row'>
            <span
              htmlFor='date_urgence'
              className='control-label col-sm-2 align-self-center mb-0'
              id='date_urgence'
            >
              date urgence :
            </span>
            <div className='col-sm-10'>
              <input
                type='date'
                className='form-control'
                id='date_urgence'
                required
                value={dechet.date_urgence}
                onChange={handleInputChange}
                name='date_urgence'
                aria-describedby='date_urgence'
              />
            </div>
          </div>
          <button onClick={saveDechet} className='btn btn-primary'>
            Submit
          </button>
          <br />
        </div>
      )}
      <br />
    </div>
  )
}
export default AddDechet
