import React from 'react'
import {useRef,useState,useContext} from 'react'
import './../style/estilosForm.css'
import {DataContext} from './Context/Contex'
import { Link} from 'react-router-dom'

function Search() {
    const inputEl = useRef('');
  const[fil,setFil]=useState([])
const Data = useContext(DataContext);

console.log("xesla data",Data);

  const filter = (event) => {
    inputEl.current.value
      event.preventDefault()
    console.log( inputEl.current.value);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    const Productos=Data.filter(prodcto=>prodcto.product_name==inputEl.current.value )
    setFil(Productos)
    prodcto=>prodcto.product_name==inputEl.current.value?console.log("este es el fil",fil):console.log("no hay resultado");
  console.log("este es el fil",fil)
  
  }
 
  return (
    <>
   
  
    
   <form >
    <input ref={inputEl}  className='search' type='search' placeholder='Buscar......'  />
   <button className='btnEnviar' type="submit" onClick={filter}><Link to="/PainTodos"><i className="bi bi-search SearchIcom " ></i> </Link> </button>
   </form>
 
 
    </>
  )
}

export default Search