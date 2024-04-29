import http from '../http-common'
class ReclamationDataService {
  getAll() {
    return http.get('/reclamations/')
  }
  get(id) {
    return http.get(`/reclamations/${id}`)
  }
  create(data) {
    return http.post('/reclamations', data)
  }
  update(id, data) {
    return http.put(`/reclamations/${id}`, data)
  }
  delete(id) {
    return http.delete(`/reclamations/${id}`)
  }
  deleteAll() {
    return http.delete(`/reclamations`)
  }
  findByTitre(titre) {
  return http.get(`/reclamations?titre=${titre}`)
  }
  transition(id, etat) {
    return http.put(`/reclamations/transition/${id}/${etat}`)
  }
}
export default new ReclamationDataService()
