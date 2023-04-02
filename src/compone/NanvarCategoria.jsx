import React from 'react'
import { useState } from 'react'
function NanvarCategoria() {

  const [categoria,setCategoria]=useState("")
  console.log(categoria);
  const SelectCategoria=(e)=>{
e.preventDefault();
const CategoriaOne = e.target.value; 
console.log(CategoriaOne);
setCategoria(CategoriaOne)

  }
  return (
    <div>


<div className="form-floating">
  <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={SelectCategoria}>
    <option selected>menu de categoria</option>
    <option value="clothes">Clothes</option>
    <option value="a cute dinosaur">a cute dinosaur</option>
    <option value="Fornitures">Fornitures</option>
    <option value="shoes">shoes</option>
    <option value="others">others</option>
  </select>
  <label htmlFor="floatingSelect">categoria</label>
</div>
    </div>
  )
}

export default NanvarCategoria