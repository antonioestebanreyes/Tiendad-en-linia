import axios from "axios"
let GetTitulo=localStorage.getItem('Titulo')
let GetTituloParse=JSON.parse(GetTitulo)
const url=`https://api.escuelajs.co/api/v1/products/?title=${GetTituloParse} `
export const Data=await  axios.get(url)

