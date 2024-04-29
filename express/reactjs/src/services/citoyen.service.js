import http from '../http-common'
class CitoyenDataService {
  getAll() {
    return http.get('/citoyens/')
  }
  getDecNai(id) {
    return http.get(`/citoyens/naissances/${id}`)
  }
  //findDecDeces
  getDecDeces(id) {
    return http.get(`/citoyens/deces/${id}`)
  }
  getDeceS() {
    return http.get('/citoyens/Decladeces/')
  }
  get(id) {
    return http.get(`/citoyens/${id}`)
  }
  create(data) {
    return http.post('/citoyens', data)
  }
  update(id, data) {
    return http.put(`/citoyens/${id}`, data)
  }
  delete(id) {
    return http.delete(`/citoyens/${id}`)
  }
  deleteAll() {
    return http.delete(`/citoyens`)
  }
  findByTitre(nom) {
    return http.get(`/citoyens?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/citoyens/transition/${id}/${etat}`)
  }
  findResp(id) {
    return http.get(`/citoyens/resp/${id}`)
  }
}
export default new CitoyenDataService()
