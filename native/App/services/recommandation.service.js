import http from '../../http-common'
import AuthHeader from './auth-header'
const getAll = () => {
  return http.get(`/recommandations/`)
}
const get = (id) => {
  return http.get(`/recommandations/${id}`)
}
const create = (data) => {
  return http.post('/recommandations', data)
}
const update = (id, data) => {
  return http.put(`/recommandations/${id}`, data)
}
const remove = (id) => {
  return http.delete(`/recommandations/${id}`)
}
const removeAll = () => {
  return http.delete(`/recommandations`)
}
const findByTitre = (titre) => {
  return http.get(`/recommandations?titre=${titre}`)
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
