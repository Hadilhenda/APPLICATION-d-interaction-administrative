import http from '../../http-common'
import AuthHeader from './auth-header'
const getAll = () => {
  return http.get(`/citoyens/`)
}
const get = (id) => {
  return http.get(`/citoyens/${id}`)
}
const create = (data) => {
  return http.post('/citoyens', data)
}
const update = (id, data) => {
  return http.put(`/citoyens/${id}`, data)
}
const remove = (id) => {
  return http.delete(`/citoyens/${id}`)
}
const removeAll = () => {
  return http.delete(`/citoyens`)
}
const findByTitre = (titre) => {
  return http.get(`/citoyens?titre=${titre}`)
}
export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitre,
}
