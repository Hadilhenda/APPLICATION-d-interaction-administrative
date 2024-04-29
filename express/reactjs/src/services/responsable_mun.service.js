import http from '../http-common'
class Responsable_munDataService {
  getAll() {
    return http.get('/responsable_muns/')
  }
  get(id) {
    return http.get(`/responsable_muns/${id}`)
  }
  create(data) {
    return http.post('/responsable_muns', data)
  }
  update(id, data) {
    return http.put(`/responsable_muns/${id}`, data)
  }
  delete(id) {
    return http.delete(`/responsable_muns/${id}`)
  }
  deleteAll() {
    return http.delete(`/responsable_muns`)
  }
  //findByTitre(ca_d) {
  //return http.get(`/analyste?ca_d=${ca_d}`)
  //}
  transition(id, etat) {
    return http.put(`/responsable_muns/transition/${id}/${etat}`)
  }
}
export default Responsable_munDataService()
