import http from '../http-common'
class ReunionDataService {
  getAll() {
    return http.get('/reunions/')
  }
  get(id) {
    return http.get(`/reunions/${id}`)
  }
  create(data) {
    return http.post('/reunions', data)
  }
  update(id, data) {
    return http.put(`/reunions/${id}`, data)
  }
  delete(id) {
    return http.delete(`/reunions/${id}`)
  }
  deleteAll() {
    return http.delete(`/reunions`)
  }
  //findByTitre(ca_d) {
  //return http.get(`/analyste?ca_d=${ca_d}`)
  //}
  transition(id, etat) {
    return http.put(`/reunions/transition/${id}/${etat}`)
  }
}
export default new ReunionDataService()
