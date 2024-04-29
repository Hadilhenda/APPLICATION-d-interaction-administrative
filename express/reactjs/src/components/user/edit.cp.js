import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UserDataService from '../../services/user.service'
const EditUser = (props) => {
  let { id } = useParams()
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
  const [currentUser, setCurrentUser] = useState(initialUserState)
  const [message, setMessage] = useState('')

  const getUser = (id) => {
    UserDataService.get(id)
      .then((response) => {
        setCurrentUser(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getUser(id)
  }, [id])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentUser({ ...currentUser, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentUser.id,
      tel: currentUser.tel,
      email: currentUser.email,
    }
    UserDataService.update(currentUser.id, data)
      .then((response) => {
        setCurrentUser({ ...currentUser, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateUser = () => {
    UserDataService.update(currentUser.id, currentUser)
      .then((response) => {
        console.log(response.data)
        setMessage('The User was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentUser ? (
        <div className='edit-form'>
          <h4>User</h4>
          <form>
            <div className='form-group'>
              <label htmlFor='tel'>Telephone</label>
              <input
                type='text'
                className='form-control'
                id='tel'
                value={currentUser.tel}
                onChange={handleInputChange}
                name='tel'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                className='form-control'
                id='email'
                value={currentUser.email}
                onChange={handleInputChange}
                name='email'
              />
            </div>
          </form>

          <button
            type='submit'
            className='m-3 btn btn-sm btn-success'
            onClick={updateUser}
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
export default EditUser
