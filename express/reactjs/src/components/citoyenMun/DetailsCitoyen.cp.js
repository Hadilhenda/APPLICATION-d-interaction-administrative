import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import ReactToPrint from 'react-to-print'
// import { ComponentToPrint } from './ComponentToPrint.js'
import CitoyenDataService from '../../services/citoyen.service'

const DetailsCitoyens = (props) => {
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
  const PrintDiv = () => {
    const divContents = document.getElementById('GFG').innerHTML
    const a = window.open('', '', 'height=1000, width=1024')
    a.document.write('<html dir="rtl"><head></head>')
    a.document.write('<body style="text-align:center"> ')
    a.document.write(
      '<img style="width: 50px;"src="/assets/images/Ho.png"/> </tr>'
    )
    a.document.write('<center>')
    a.document.write(divContents)
    a.document.write('</center></body></html>')
    a.document.close()
    a.print()
  }
  return (
    <div id='table' className='table-editable'>
      <div id='GFG'>
        <table style={{ textAlign: 'center', width: '100%' }}>
          <tr style={{ textAlign: 'center' }}>
            <th style={{ textAlign: 'right' }}>
              {' '}
              ولاية
              <br /> معتمدية <br />
              بلدية الدائرة <br />
              البلدية <br /> عمادة
            </th>
            <th style={{ textAlign: 'center' }}>
              <h2>مضمون</h2>
              <h3>من دفاتر الحالة المدنية </h3>{' '}
            </th>

            <th style={{ textAlign: 'right', border: '1px solid black' }}>
              {' '}
              سنة <br /> عدد الرسم <br /> تصريح حكم
            </th>
          </tr>
          <tr>
            <td></td>{' '}
            <td style={{ textAlign: 'center' }}>
              {' '}
              <h2> الولادات </h2>
            </td>
          </tr>
        </table>
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
              <th style={{ border: '1px solid black' }}> تاريخ الولادة</th>{' '}
              <td style={{ border: '1px solid black' }}>
                {currentCitoyen.date_naissance}
              </td>
            </tr>
            <tr>
              {' '}
              <th style={{ border: '1px solid black' }}> مكان الولادة</th>{' '}
              <td style={{ border: '1px solid black' }}>
                {currentCitoyen.adress_naissance}
              </td>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}>
                {' '}
                جنس المولود (ذكى او انثى){' '}
              </th>{' '}
              <td style={{ border: '1px solid black' }}>
                {currentCitoyen.sexe}
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
              <th style={{ border: '1px solid black' }}>
                {' '}
                اسم من قام بالإعلام و لقبه
              </th>{' '}
              <td style={{ border: '1px solid black' }}>
                {currentCitoyen.declaration_accouchement}
              </td>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}> مساعد الولادة</th>
              <td style={{ border: '1px solid black' }}>
                {currentCitoyen.assistant_accouchement}
              </td>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}> دفتر العائلة</th>{' '}
              <td style={{ border: '1px solid black' }}>
                {currentCitoyen.livret_familial}
              </td>
            </tr>
          </table>
          <div>
            <table
              style={{ textAlign: 'center', border: '1px', width: '100%' }}
              className='table table-bordered table-responsive-md table-striped text-center'
            >
              <tr>
                <th style={{ border: '1px solid black' }}>
                  الملاحظات <br /> <br/>{currentCitoyen.remarque}
                </th>{' '}
              </tr>
            </table>
          </div>
        </div>
      </div>
      <button className='m-3 btn btn-sm btn-info' onClick={PrintDiv}>
        Imprimer
      </button>
    </div>
  )
}
export default DetailsCitoyens
