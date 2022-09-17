import React from 'react'
import   '../style/estilosForm.css'
import useForm from '../hooks/UseForm'
import { RegisterUser } from '../Service/UserServices'
import {useNavigate} from 'react-router-dom'
function Register() {
  const navigate = useNavigate()
  const sendData = async (data) => {
    try {
      const result = await RegisterUser(data);

      if(result.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      alert('Ocurrió un error: ' + error.message);
    }
  };
  const { input,handleInputChange,handleSubmit}=useForm(sendData,{
    first_name: '',
    last_name: '',
    birth_date: '',
    gender: 'Select a gender',
    email: '',
    password: '',
  })
 
  return (
    <>
    <h1>Registro</h1>
    <div className="containerForm">
     <form id="Formulario">
       <label htmlFor="Nombre">Nombre:</label>
       <input type="text"   onChange={handleInputChange}  name='first_name' value={input.first_name} placeholder="Nombre..."/>
       <label htmlFor="Nombre">Apellido:</label>
       <input type="text" name="apellido" placeholder="Apellido"  onChange={handleInputChange}/>
       <label htmlFor="Nombre">Fecha:</label>
       <input type="date" name="fecha" placeholder="Correo@..."  onChange={handleInputChange}/>
       <label htmlFor="Nombre">Contraseña:</label>
       <input type="email" name="correo" placeholder="Contarsena"  onChange={handleInputChange}/>
       <label htmlFor="Nombre">Genero:</label>
       <select name="Genero" className="selectGenero"  onChange={handleInputChange}>
         <option value="Masculino">M</option>
         <option value="Femenino">F</option>
       </select>
       <button id="sublime" onClick={handleSubmit}>Enviar</button>
     </form>
 
    </div>
     </>
  )
}

export default Register