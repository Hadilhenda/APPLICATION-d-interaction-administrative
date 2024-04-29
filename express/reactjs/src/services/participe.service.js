import http from '../http-common'
class ParticipeDataService {
  getAll(id) {
    return http.get(`/participes/${id}`)
  }
  getAllbyUser(id) {
    return http.get(`/participes/user/${id}`)
  }
  get(id) {
    return http.get(`/participes/one/${id}`)
  }
  create(data) {
    return http.post('/participes', data)
  }
  update(id, data) {
    return http.put(`/participes/${id}`, data)
  }
  delete(id) {
    return http.delete(`/participes/${id}`)
  }
  deleteAll() {
    return http.delete(`/participes`)
  }
  //findByTitre(ca_d) {
  //return http.get(`/analyste?ca_d=${ca_d}`)
  //}
  transition(id, etat) {
    return http.put(`/participes/transition/${id}/${etat}`)
  }
}
export default new ParticipeDataService()
