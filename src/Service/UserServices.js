 import axios from 'axios'
/*  import dotenv from "dotenv"
 dotenv.config(); */
const BASE_URL = 'https://api.escuelajs.co/api/v1/users/'
 const Login='https://api.escuelajs.co/api/v1/auth/login/'


/* const token = window.sessionStorage.getItem('token') || ''
const config = {
  headers: { Authorization: `JWT ${token}` }
} */

const RegisterUser = (data) => axios.post(BASE_URL, data)
const LoginUser = (data) => axios.post(Login, data)



export { RegisterUser, LoginUser }  