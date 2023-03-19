/* import dotenv from "dotenv"
dotenv.config(); */
const url='https://api.escuelajs.co/api/v1/products'
import axios from "axios"
const products= await axios.get(url)
export  const Prod=products.data

