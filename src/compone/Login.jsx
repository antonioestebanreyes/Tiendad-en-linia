import React from 'react'
import '../style/estilosForm.css'
import useForm from '../hooks/UseForm'
import {LoginUser  } from "../Service/UserServices";
function Login() {

const sendData= async(data) =>{
  console.log(data.email);
  try {
    const result=await LoginUser(data)
    console.log(result);
    if (result.status===2001) {
      console.log("ok");
    }
  } catch (error) {
    alert("ocurrio un error :",error.message)
  }
}
 const { input,handleInputChange,handleSubmit}=useForm(sendData,{
    email: " ",
    password: " ",
    
   
  })
  return (
    <>
<h1>Login</h1>
<div className="containerFormLogin">
<form id="FormularioLogin">
  <label htmlFor="Nombre">Correo:</label>
  <input type="email" name="email" onChange={handleInputChange} placeholder="Correo@..." value={input.email}/>
  <label htmlFor="Nombre">Contraseña:</label>
  <input type="password" name="password" onChange={handleInputChange} placeholder="Contarsena" value={input.password}/>
  <input type="number" name="number" onChange={handleInputChange} placeholder="Ingresa tu numero de registro" value={input.number}/>
  <button id="loginBtn" onClick={handleSubmit}>Iniciar</button>
</form>

</div>
</>
);
}

export default Login