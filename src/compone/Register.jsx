 import React from 'react'
import   '../style/estilosForm.css'
import useForm from '../hooks/UseForm'
 import { RegisterUser } from '../Service/UserServices'  
import {useNavigate} from 'react-router-dom'
function Register() {
  const navigate = useNavigate()
  const sendData = async (data) => {
    console.log(data);
    try {
       const result = await RegisterUser(data); 
console.log(result);
      if(result.status === 201) {
        alert("Esta es su clave unica para que se logie, le recomentamos que guarde esta informacion,ya que esta informacion podra entra en la pagina"+ " : " +result.data.id)
        navigate('/Login')
      }
    } catch (error) {
      alert('Ocurrió un error: ' + error.message);
    }
  };
  const { input,handleInputChange,handleSubmit}=useForm(sendData,{
    email: " ",
    password: " ",
    name: " ",
    avatar: " ",
  })
 
  return (
    <>
    <h1>Registro</h1>
    <div className="containerForm d-flex justify-content-center">
     <form id="Formulario">
       <label htmlFor="name">Nombre:</label>
       <input type="text"   onChange={handleInputChange}  name='name' value={input.name} placeholder="Nombre..."/>
       <label htmlFor="email">Email:</label>
       <input type="email" name="email" placeholder="email" value={input.email}  onChange={handleInputChange}/>
       <label htmlFor="avatar">Avatar:</label>
       <input type="url" name="avatar"  placeholder='Ingresa una url' value={input.avatar} onChange={handleInputChange}/>
       <label htmlFor="password">password:</label>
       <input type="password" name="password" placeholder="ingrese su passaword"  onChange={handleInputChange} value={input.password}/>
       <button id="sublime" onClick={handleSubmit}>Enviar</button>
     </form>
 
    </div>
     </>
  )
}

export default Register 