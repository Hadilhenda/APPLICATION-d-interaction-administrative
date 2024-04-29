import React, { useState } from 'react'
import RecommandationDataService from '../../services/recommandation.service'

const AddRecommandation = () => {
  const [recommandation, setRecommandation] = useState({
    id: null,
    titre: '',
    description: '',
    domaine: '',
    specification: '',
    retenu: 0,
    etat: 0,
    date_ins: '2022-01-01 00:00:00',
    submitted: false,
  })

  const onChangeTitre = (e) => {
    setRecommandation({ ...recommandation, titre: e.target.value })
    console.log(recommandation)
  }

  const onChangeDescription = (e) => {
    setRecommandation({ ...recommandation, description: e.target.value })
    console.log(recommandation)
  }

  const onChangeDomaine = (e) => {
    setRecommandation({ ...recommandation, domaine: e.target.value })
    console.log(recommandation)
  }

  const onChangeSpecification = (e) => {
    setRecommandation({ ...recommandation, specification: e.target.value })
    console.log(recommandation)
  }

  const onChangeRetenu = (e) => {
    setRecommandation({ ...recommandation, retenu: e.target.value })
    console.log(recommandation)
  }

  const onChangeEtat = (e) => {
    setRecommandation({ ...recommandation, etat: e.target.value })
    console.log(recommandation)
  }

  const onChangeDate_ins = (e) => {
    setRecommandation({ ...recommandation, date_ins: e.target.value })
    console.log(recommandation)
  }

  const saveRecommandation = () => {
    RecommandationDataService.create(recommandation)
      .then(() => {
        setRecommandation({ ...recommandation, submitted: true })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const newRecommandation = () => {
    setRecommandation({
      ...recommandation,
      id: null,
      titre: '',
      description: '',
      domaine: '',
      specification: '',
      retenu: 0,
      etat: 0,
      date_ins: '2022-01-01 00:00:00',
      submitted: false,
    })
  }

  return (
    <div className='submit-form'>
      {recommandation.submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className='btn btn-success' onClick={newRecommandation}>
            New One
          </button>
        </div>
      ) : (
        <div>
          <div className='form-group'>
            <label htmlFor='titre'>titre</label>
            <input
              type='text'
              className='form-control'
              id='titre'
              required
              value={recommandation.titre}
              onChange={onChangeTitre}
              name='titre'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <textarea
              type='text'
              className='form-control'
              id='description'
              required
              onChange={onChangeDescription}
              name='description'
            >
              {recommandation.description}
            </textarea>
          </div>
          <div className='form-group'>
            <label htmlFor='domaine'>Domaine</label>
            <input
              type='text'
              className='form-control'
              id='domaine'
              required
              value={recommandation.domaine}
              onChange={onChangeDomaine}
              name='domaine'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='specification'>Specification</label>
            <textarea
              type='text'
              className='form-control'
              id='specification'
              required
              onChange={onChangeSpecification}
              name='specification'
            >
              {recommandation.specification}
            </textarea>
          </div>
          <div className='form-group'>
            <label htmlFor='retenu'>Retenu</label>
            <input
              type='text'
              className='form-control'
              id='retenu'
              required
              value={recommandation.retenu}
              onChange={onChangeRetenu}
              name='retenu'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='etat'>Etat</label>
            <input
              type='text'
              className='form-control'
              id='etat'
              required
              value={recommandation.etat}
              onChange={onChangeEtat}
              name='etat'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='date_ins'>Date</label>
            <input
              type='date'
              className='form-control'
              id='date_ins'
              required
              value={recommandation.date_ins}
              onChange={onChangeDate_ins}
              name='date_ins'
            />
          </div>
          <button onClick={saveRecommandation} className='btn btn-success'>
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
export default AddRecommandation
