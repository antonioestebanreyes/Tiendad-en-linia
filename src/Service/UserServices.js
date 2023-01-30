import axios from 'axios'
const BASE_URL = 'http://localhost:4000/inmueble'

const token = window.sessionStorage.getItem('token') || ''
const config = {
  headers: { Authorization: `JWT ${token}` }
}

const RegisterUser = (data) => axios.post(`${BASE_URL}/signup`, data)
const LoginUser = (data) => axios.post(`${BASE_URL}/login`, data)
const getSingleUser = (id) => axios.get(`${BASE_URL}/user/${id}`, config)

export { RegisterUser, LoginUser, getSingleUser } 