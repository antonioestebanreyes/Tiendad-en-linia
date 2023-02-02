 import axios from 'axios'
const BASE_URL = 'https://api.escuelajs.co/api/v1/users/'

/* const token = window.sessionStorage.getItem('token') || ''
const config = {
  headers: { Authorization: `JWT ${token}` }
} */

const RegisterUser = (data) => axios.post(BASE_URL, data)
const LoginUser = (data) => axios.get(` https://api.escuelajs.co/api/v1/users/${data.number}`, data)
const getSingleUser = (id) => axios.get(`${BASE_URL}/user/${id}`, config)

export { RegisterUser, LoginUser, getSingleUser }  