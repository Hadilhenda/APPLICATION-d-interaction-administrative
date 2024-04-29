import http from '../http-common'
class Responsable_hopsDataService {
  getAll() {
    return http.get('/responsable_hops/')
  }
  get(id) {
    return http.get(`/responsable_hops/${id}`)
  }

  delete(id) {
    return http.delete(`/responsable_hops/${id}`)
  }
  deleteAll() {
    return http.delete(`/responsable_hops`)
  }
  findByTitre(nom) {
    return http.get(`/responsable_hops?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/responsable_hops/transition/${id}/${etat}`)
  }
}
export default new Responsable_hopsDataService()
