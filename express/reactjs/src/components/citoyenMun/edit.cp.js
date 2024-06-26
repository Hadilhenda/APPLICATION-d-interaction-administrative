import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CitoyenDataService from '../../services/citoyen.service'
const EditCitoyenM = (props) => {
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
  const [message, setMessage] = useState('')

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

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCurrentCitoyen({ ...currentCitoyen, [name]: value })
  }

  const updatePublished = (status) => {
    var data = {
      id: currentCitoyen.id,
      nom: currentCitoyen.nom,
      prenom: currentCitoyen.prenom,
      date_naissance: currentCitoyen.date_naissance,
      adress_naissance: currentCitoyen.adress_naissance,
      sexe: currentCitoyen.sexe,
      nom_pere: currentCitoyen.nom_pere,
      nom_mere: currentCitoyen.nom_mere,
      remarque: currentCitoyen.remarque,
      date_mort: currentCitoyen.date_mort,
      cause_mort: currentCitoyen.cause_mort,
      date_enterment: currentCitoyen.date_enterment,
      declaration_accouchement: currentCitoyen.declaration_accouchement,
      declaration_hopital: currentCitoyen.declaration_hopital,
      assistant_accouchement: currentCitoyen.assistant_accouchement,
      cin_pere: currentCitoyen.cin_pere,
      cin_mere: currentCitoyen.cin_mere,
      livret_familial: currentCitoyen.livret_familial,
      assistant_mort: currentCitoyen.assistant_mort,
      date_enterement: currentCitoyen.date_enterement,
    }
    CitoyenDataService.update(currentCitoyen.id, data)
      .then((response) => {
        setCurrentCitoyen({ ...currentCitoyen, etat: status })
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const updateCitoyen = () => {
    CitoyenDataService.update(currentCitoyen.id, currentCitoyen)
      .then((response) => {
        console.log(response.data)
        setMessage('The Citoyen was updated successfully!')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      {currentCitoyen ? (
        <div className='edit-form'>
          <h4>Citoyen</h4>
          <form>
            {/* date_enterment */}
            <div className='input-group mb-3'>
              <span
                htmlFor='date_enterement'
                class='input-group-text'
                id='date_enterement'
              >
                date enterment
              </span>
              <input
                type='date'
                className='form-control'
                id='date_enterement'
                required
                value={currentCitoyen.date_enterement}
                onChange={handleInputChange}
                name='date_enterement'
                aria-describedby='date_enterement'
                placeholder='date_enterement'
              />
            </div>
            {/* cause_mort */}
            <div className='input-group mb-3'>
              <span
                htmlFor='cause_mort'
                class='input-group-text'
                id='cause_mort'
              >
                cause de mort
              </span>
              <input
                type='text'
                className='form-control'
                id='cause_mort'
                required
                value={currentCitoyen.cause_mort}
                onChange={handleInputChange}
                name='cause_mort'
                placeholder='cause_mort'
              />
            </div>
            {/* date_mort */}
            <div className='input-group mb-3'>
              <span htmlFor='date_mort' class='input-group-text' id='date_mort'>
                date mort
              </span>
              <input
                type='date'
                className='form-control'
                id='date_mort'
                required
                value={currentCitoyen.date_mort}
                onChange={handleInputChange}
                name='date_mort'
                aria-describedby='date_mort'
              />
            </div>
            {/* assistant_mort */}
            <div className='input-group mb-3'>*         (    <crAn
         (     htmlFor='assiqtant_mort'
   !0      �  � clCss='i.pwt�wpoup-text7
          ` " 0 id='assistantOeort'
    0b0       >
 "   "    �     assiw�ant mort
          $   <+Qpa.>
       (      <input
                type='text%     $          cdas�Name'for�-coftrol'
 "(    "    0   i`='�ssistent�mn2t'
`   0     $   & reuui2ef
 0     `        Value={currentCidoyen.asskstanv_oort
   0`       �  (onC8ange={haldleIo�wpKhange}
   $           (name='assis�ant_m/rt'
   ! � 0        placeholfeb='qscm{tand_mnrt'
          (   />
     0  0   </div
         �</fOrm.

  "       ,button
   0      � typa}'subm)t'=
 !    $   0 clCssn!m�='o-3`btn btN-sm bTn-sec#esq'j0 �         onClic�={updateC)toyen}
        ( >
  $      "  Qpf`te
          <-bw0toN>
 !        <p>{lessaoe}</p>` d   !$</div>
�4� ! ) : (
    0   <Div;
 �        <br />*  ( $     <�>Please click oL$c Tutorkal&..</p>
        </dir>
 $ (" iJ    <.diV>
  )
|export defiult EditCit/ye�M
