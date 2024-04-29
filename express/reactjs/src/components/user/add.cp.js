import React, { useState } from 'react'
import UserDataService from '../../services/user.service'
const AddUser = () => {
  const initialUserState = {
    id: null,
    nom: '',
    prenom: '',
    tel: '',
    email: '',
    adresse: '',
    cpostal: '',
    gouvernorat: '',
    login: '',
    password: '',
    profil: 1,
    date_ins: '2022-01-01 00:00:00',
    date_upd: '2022-01-01 00:00:00',
    etat: 0,
  }
  const [user, setUser] = useState(initialUserState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }
  const saveUser = () => {
    var data = {
      nom: user.nom,
      prenom: user.prenom,
      tel: user.tel,
      email: user.email,
      adresse: user.adresse,
      cpostal: user.cpostal,
      gouvernorat: user.gouvernorat,
      login: user.login,
      password: user.password,
      profil: user.profil,
      date_ins: user.date_ins,
      date_upd: user.date_upd,
      etat: user.etat,
    }
    UserDataService.create(data)
      .then((response) => {
        setUser({
          id: response.data.id,
          nom: response.data.nom,
          prenom: response.data.prenom,
          tel: response.data.tel,
          email: response.data.email,
          adresse: response.data.adresse,
          cpostal: response.data.cpostal,
          gouvernorat: response.data.gouvernorat,
          login: response.data.login,
          password: response.data.password,
          profil: response.data.profil,
          date_ins: response.data.date_ins,
          date_upd: response.data.date_upd,
          etat: response.data.etat,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newUser = () => {
    setUser(initialUserState)
    setSubmitted(false)
  }

  return (
    <div className='submit-form'>
      {/* {this.state.submitted ? ( */}
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newUser}>
            New One
          </button>
        </div>
      ) : (
        <div>
          <div className='input-group mb-3'>
            <span htmlFor='nom' className='input-group-text' id='nom'>
              Nom
            </span>
            <input
              type='text'
              className='form-control'
              id='nom'
              required
              // value={this.state.titre}
              value={user.nom}
              // onChange={this.onChangeTitre}
              onChange={handleInputChange}
              name='nom'
              aria-describedby='nom'
            />
          </div>

          <div className='input-group mb-3'>
            <span htmlFor='login' className='input-group-text' id='login'>
              Login
            </span>
            <input
              type='text'
              className='form-control'
              id='login'
              required
              value={user.login}
              onChange={handleInputChange}
              name='login'
              placeholder='login'
            />
          </div>

          <div className='input-group mb-3'>
            <span htmlFor='password' className='input-group-text' id='password'>
              password
            </span>
            <input
              type='text'
              className='form-control'
              id='password'
              required
              value={user.password}
              onChange={handleInputChange}
              name='password'
              placeholder='password'
            />
          </div>

          <button onClick={saveUser} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddUser
