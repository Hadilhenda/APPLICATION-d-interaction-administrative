import http from '../http-common'
class DechetDataService {
  getAll() {
    return http.get('/dechets/')
  }
  get(id) {
    return http.get(`/dechets/${id}`)
  }
  create(data) {
    return http.post('/dechets', data)
  }
  update(id, data) {
    return http.put(`/dechets/${id}`, data)
  }
  delete(id) {
    return http.delete(`/dechets/${id}`)
  }
  deleteAll() {
    return http.delete(`/dechets`)
  }
  findByTitre(titre) {
    return http.get(`/dechets?titre=${titre}`)
  }
  transition(id, etat) {
    return http.put(`/dechets/transition/${id}/${etat}`)
  }
  findResp(id) {
    return http.get(`/dechets/resp/${id}`)
  }
}
export default new DechetDataService()
