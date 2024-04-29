import http from '../http-common'
class DelegationDataService {
  getAll() {
    return http.get('/delegations/')
  }
  get(id) {
    return http.get(`/delegations/${id}`)
  }
  create(data) {
    return http.post('/delegations', data)
  }
  update(id, data) {
    return http.put(`/delegations/${id}`, data)
  }
  delete(id) {
    return http.delete(`/delegations/${id}`)
  }
  deleteAll() {
    return http.delete(`/delegations`)
  }
  //findByTitre(ca_d) {
  //return http.get(`/analyste?ca_d=${ca_d}`)
  //}
  transition(id, etat) {
    return http.put(`/delegations/transition/${id}/${etat}`)
  }
}
export default new DelegationDataService()
