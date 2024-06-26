import http from '../http-common'
class AnalysteDataService {
  getAll() {
    return http.get('/analystes/')
  }
  get(id) {
    return http.get(`/analystes/${id}`)
  }
  create(data) {
    return http.post('/analystes', data)
  }
  update(id, data) {
    return http.put(`/analystes/${id}`, data)
  }
  delete(id) {
    return http.delete(`/analystes/${id}`)
  }
  deleteAll() {
    return http.delete(`/analystes`)
  }
  //findByTitre(ca_d) {
  //return http.get(`/analyste?ca_d=${ca_d}`)
  //}
  transition(id, etat) {
    return http.put(`/analystes/transition/${id}/${etat}`)
  }
}
export default new AnalysteDataService()
