import React from 'react'
import '../style/estilosForm.css'
function Login() {
  return (
    <>
<h1>Login</h1>
<div className="containerFormLogin">
<form id="FormularioLogin">
  <label htmlFor="Nombre">Nombre:</label>
  <input type="text" name="nombre" placeholder="Nombre..."/>
  <label htmlFor="Nombre">Correo:</label>
  <input type="email" name="correo" placeholder="Correo@..."/>
  <label htmlFor="Nombre">Contraseña:</label>
  <input type="passwer" name="contraseña" placeholder="Contarsena"/>
  <button id="loginBtn">Iniciar</button>
</form>

</div>
</>
);
}

export default Login