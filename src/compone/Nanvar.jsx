import React from 'react'
import '../style/Nanvar.css'
import '../style/Api.css'
import 'bootstrap'
import { NavLink} from "react-router-dom";
import NanvarCategoria from './NanvarCategoria';
function  Nanvar() {
  return (
    <div className='container-fluid'>
      <nav className='NavContainer'>
      <h4 className='TituloIcomer'>She'e</h4>
     <NanvarCategoria/>
  

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
       //activeClassName="active"
        to="/"
      >
  Mis compras
      </NavLink>
       
       <NavLink to="/dashbord">
        Dashbord
       </NavLink>

 </nav>
 <div className='mainCarucel'>
<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://http2.mlstatic.com/D_NQ_921149-MLA53403916442_012023-OO.webp" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://http2.mlstatic.com/D_NQ_818220-MLA53323387455_012023-OO.webp" className="d-block w-100" alt="..." />
     
    </div>
    <div className="carousel-item">
      <img src="https://http2.mlstatic.com/D_NQ_661291-MLA53476350644_012023-OO.webp" className="d-block w-100 h-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
       
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>



 </div>

    
   
   
  )
}

export default Nanvar