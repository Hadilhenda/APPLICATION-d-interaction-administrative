import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import ReactToPrint from 'react-to-print'
// import { ComponentToPrint } from './ComponentToPrint.js'
import CitoyenDataService from '../../services/citoyen.service'

const DateEnt = (props) => {
  let { id } = useParams()
  const initialCitoyenState = {
    id: null,
    nom: '',
    prenom: '',
    date_naissance: '2022-01-01 00:00:00',
    adress_naissance: '',
    sexe: '',
    nom_pere: '',
    nom_mere: '',
    remarque: '',
    date_mort: '2022-01-01 00:00:00',
    cause_mort: '',
    date_enterment: '2022-01-03 00:00:00',
    declaration_accouchement: '',
    declaration_hopital: '',
    assistant_accouchement: '',
    cin_pere: '',
    cin_mere: '',
    livret_familial: '',
    assistant_mort: '',
    date_enterement: '',
  }
  const [currentCitoyen, setCurrentCitoyen] = useState(initialCitoyenState)

  const getCitoyen = (id) => {
    CitoyenDataService.get(id)
      .then((response) => {
        setCurrentCitoyen(response.data)
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getCitoyen(id)
  }, [id])

  return (
    <div id='table' className='table-editable'>
      <div id='GFG'>
        <div>
          <table
            style={{ textAlign: 'center', border: '1px', width: '100%' }}
            className='table table-bordered table-responsive-md table-striped text-center'
          >
            <tr>
              <th style={{ border: '1px solid black', width: '20%' }}>الإسم</th>{' '}
              <td style={{ border: '1px solid black' }}>
                {currentCitoyen.nom}
              </td>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}>اللقب</th>{' '}
              <td style={{ border: '1px solid black' }}>
                {currentCitoyen.prenom}
              </td>
            </tr>
            <tr>
              {' '}
              <th style={{ border: '1px solid black' }}>
                {' '}
                اسم الأب و لقبه
              </th>{' '}
              <td style={{ border: '1px solid black' }}>
                {currentCitoyen.nom_pere}
              </td>{' '}
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}> اسم الأم و لقبها</th>{' '}
              <td style={{ border: '1px solid black' }}>
                {currentCitoyen.nom_mere}
              </td>
            </tr>
            <tr>
              {' '}
              <th style={{ border: '1px solid black' }}> تاريخ الوفاة</th>{' '}
              <td style={{ border: '1px solid black' }}>
                {currentCitoyen.date_mort}
              </td>{' '}
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}>تاريخ الجنازة</th>{' '}
              <td style={{ border: '1px solid black' }}>
                {currentCitoyen.date_enterement}
              </td>
            </tr>
          </table>
          <div></div>
        </div>
      </div>
    </div>
  )
}
export default DateEnt
