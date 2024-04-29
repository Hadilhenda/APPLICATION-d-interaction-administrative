import http from '../http-common'
class HopitalDataService {
  getAll() {
    return http.get('/hopitals/')
  }
  get(id) {
    return http.get(`/hopitals/${id}`)
  }
  create(data) {
    return http.post('/hopitals', data)
  }
  update(id, data) {
    return http.put(`/hopitals/${id}`, data)
  }
  delete(id) {
    return http.delete(`/hopitals/${id}`)
  }
  deleteAll() {
    return http.delete(`/hopitals`)
  }
  findByTitre(nom) {
    return http.get(`/hopitals?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/hopitals/transition/${id}/${etat}`)
  }
}
export default new HopitalDataService()
