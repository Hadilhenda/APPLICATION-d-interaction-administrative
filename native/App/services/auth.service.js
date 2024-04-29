import http from '../../http-common'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Register = (email, login, password) => {
  return http.post('/auth/signup', {
    email,
    login,
    password,
  })
}
const Login = async (username, password) => {
  const response = await http.post('/auth/signin', {
    login: username,
    password: password,
  })
  if (response.data.accessToken) {
    const xdata = JSON.stringify(response.data)
    await AsyncStorage.setItem('user', xdata)
  }
  return response.data
}
const Logout = () => {
  AsyncStorage.removeItem('user')
}
const GetCurrentUser = () => {
  return AsyncStorage.getItem('user')
}
const getAll = () => {
  return http.get('/recommandations/')
}
export default {
  Register,
  Login,
  Logout,
  GetCurrentUser,
  getAll,
}
