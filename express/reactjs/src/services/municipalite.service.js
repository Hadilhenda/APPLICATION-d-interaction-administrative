import http from '../http-common'
class MunicipaliteDataService {
  getAll() {
    return http.get('/municipalites/')
  }
  get(id) {
    return http.get(`/municipalites/${id}`)
  }
  create(data) {
    return http.post('/municipalites', data)
  }
  update(id, data) {
    return http.put(`/municipalites/${id}`, data)
  }
  delete(id) {
    return http.delete(`/municipalites/${id}`)
  }
  deleteAll() {
    return http.delete(`/municipalites`)
  }
  findByTitre(nom) {
    return http.get(`/municipalites?nom=${nom}`)
  }
  transition(id, etat) {
    return http.put(`/municipalites/transition/${id}/${etat}`)
  }

}
export default new MunicipaliteDataService()
