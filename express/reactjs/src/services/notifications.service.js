import http from '../http-common'
class NotificationDataService {
  getAll(id) {
    return http.get(`/notifiers/${id}`)
  }

  get(id) {
    return http.get(`/notifiers/one/${id}`)
  }
  create(data) {
    return http.post('/notifiers', data)
  }

  delete(id) {
    return http.delete(`/notifiers/${id}`)
  }
  deleteAll() {
    return http.delete(`/notifiers`)
  }
}
export default new NotificationDataService()
