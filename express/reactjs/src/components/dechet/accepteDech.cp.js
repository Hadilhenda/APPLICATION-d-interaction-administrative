import React, { useState, useEffect } from 'react'
import DechetDataService from '../../services/dechet.service'
import { useParams } from 'react-router-dom'
const AccepteDech = (props) => {
  let { id } = useParams()
  const initialDechetState = {
    id: null,
    titre: '',
    description: '',
    quantite: '',
    date_urgence: '2022-01-01 00:00:00',
    date_elv: '2022-01-01 00:00:00',
  }
  const [currentDechet, setCurrentDechet] = useState(initialDechetState)
  const [message, setMessage] = useState('')
  // componentDidMount() {
  //   this.getRecommandation(this.props.match.params.id)
  // }
  const getDechet = (id) => {
    DechetDataService.get(id)
      .then((response) => {
        setCurrentDechet(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getDechet(id)
  }, [id])

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target
  //   setCurrentCitoyen({ ...currentCitoyen, [name]: value })
  // }

  return (
    <div>
      {currentDechet ? (
        <div className='edit-form'>
          <h4>Dechets</h4>
          <form>
            <table
              style={{ textAlign: 'center', border: '1px', width: '100%' }}
              className='table table-bordered table-responsive-md table-striped text-center'
            >
              <tr>
                <th style={{ border: '1px solid black', width: '20%' }}>
                  titre
                </th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentDechet.titre}
                </td>
              </tr>
              <tr>
                <th style={{ border: '1px solid black' }}>description</th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentDechet.description}
                </td>
              </tr>
              <tr>
                <th style={{ border: '1px solid black' }}>quantite</th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentDechet.quantite}
                </td>
              </tr>
              <tr>
                {' '}
                <th style={{ border: '1px solid black' }}>
                  {' '}
                  date_urgence
                </th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentDechet.date_urgence}
                </td>
              </tr>
              <tr>
                <th style={{ border: '1px solid black' }}> date_elv </th>{' '}
                <td style={{ border: '1px solid black' }}>
                  {currentDechet.date_elv}
                </td>
              </tr>
            </table>
          </form>
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
export default AccepteDech
