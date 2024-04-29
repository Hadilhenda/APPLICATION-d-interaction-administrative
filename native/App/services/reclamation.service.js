import http from '../../http-common'
import AuthHeader from './auth-header'
const getAll = () => {
  return http.get(`/reclamations/`)
}
const get = (id) => {
  return http.get(`/reclamations/${id}`)
}
const create = (data) => {
  return http.post('/reclamations', data)
}
const upload = (data) => {
  return http.post('/reclamations/upload', data)
}
const update = (id, data) => {
  return http.put(`/reclamations/${id}`, data)
}
const remove = (id) => {
  return http.delete(`/reclamations/${id}`)
}
const removeAll = () => {
  return http.delete(`/reclamations`)
}
const findByTitre = (titre) => {
  return http.get(`/reclamations?titre=${titre}`)
}
export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitre,
  upload,
}
