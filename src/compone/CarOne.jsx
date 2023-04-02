import React from 'react'
import { Data} from '../Service/ProductoOne';
import { useState } from 'react';

console.log(Data);
 function CarOne() {
const [ProductoOne,SetProductoOne]=useState(Data)
console.log(Data);
const DATA=Data.data[0]
const {name,updatedAt,description,title,price
,images}=DATA
const [One,two,trhee]=images
  return (
    <div className="container-fluid">
<div className="card-group bg-info">
  <div className="card m-2 p-2">
    <img src={trhee} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h4 className="card-title"> Modelo1 </h4>
      <h5 className="card-title">{title} </h5>
      <p className="card-text">{description} </p>
      <p className="card-text"><small className="text-body-secondary">descricion:{description} </small></p>
      <p className="card-text"><small className="text-body-secondary">$:{price} </small></p>
      <button type="button" class="btn btn-danger">Comprar</button>
    </div>
  </div>
  <div className="card m-2 p-2">
    <img src={two} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h4 className="cart-title">Modelo 2</h4>
      <h5 className="card-title">{title} </h5>
      <p className="card-text">{description}.</p>
      <p className="card-text"><small className="text-body-secondary">{updatedAt} </small></p>
      <p className="card-text"><small className="text-body-secondary">$:{price} </small></p>
      <button type="button" class="btn btn-danger">Comprar</button>
    </div>
  </div>
  <div className="card m-2 p-2">
    <img src= {One} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h4 className="card-title">Modelo3</h4>
      <h5 className="card-title">{title} </h5>
      <p className="card-text">{description} </p>
      <p className="card-text"><small className="text-body-secondary">{updatedAt} </small></p>
      <p className="card-text"><small className="text-body-secondary">$:{price} </small></p>
      <button type="button" class="btn btn-danger">Comprar</button>
    </div>
  
  </div>
</div>
  <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Ver mas sobre este categoria</button>
  <button class="btn btn-primary" type="button">Regresar</button>
</div>
    </div>




   



      








    



    
  ) 
}

export default CarOne