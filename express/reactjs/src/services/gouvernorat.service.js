import http from '../http-common'
class GouvernoratDataService {
  getAll() {
    return http.get('/gouvernorats/')
  }
  get(id) {
    return http.get(`/gouvernorats/${id}`)
  }
  create(data) {
    return http.post('/gouvernorats', data)
  }
  update(id, data) {
    return http.put(`/gouvernorats/${id}`, data)
  }
  delete(id) {
    return http.delete(`/gouvernorats/${id}`)
  }
  deleteAll() {
    return http.delete(`/gouvernorats`)
  }
  findByTitre(nom) {
    return http.get(`/gouvernorats?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/gouvernorats/transition/${id}/${etat}`)
  }
}
export default new GouvernoratDataService()
