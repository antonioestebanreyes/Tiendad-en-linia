import React from 'react'
import '../style/Nanvar.css'
import { NavLink} from "react-router-dom";
function  Nanvar() {
  return (
    <div className='container'>
      <nav className='NavContainer'>
      <h4 className='TituloIcomer'>She'e</h4>
     
  

 <NavLink
       //activeClassName="active"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
      // activeClassName="active"
        to="/Formulario"
      >
      <i className="bi bi-person-fill"></i>
      </NavLink>
      <NavLink
       //activeClassName="active"
        to="/Login"
      >
    Login
      </NavLink>
      <NavLink
    //   activeClassName="active"
        to="/"
      >
    Crea una cuenta 
      </NavLink>
      <NavLink
     //  activeClassName="active"
        to="/"
      >
   Ingresa
      </NavLink>
      <NavLink
       //activeClassName="active"
        to="/"
      >
  Mis compras
      </NavLink>
       
       
 </nav>


    </div>
   
   
  )
}

export default Nanvar