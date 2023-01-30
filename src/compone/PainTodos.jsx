import '../style/PainFilter.css'
import {DataContext} from './Context/Contex'
import {useContext} from 'react'
import { useEffect } from 'react';


function PainTodos() {
 const DataDeProducto = useContext(DataContext);
 useEffect(()=>{

   console.log("este es el producto",DataDeProducto);
 },[])

return(
  <div>
    
    
 
       <h1>h</h1>
         
       
       
    
       
      
   
  </div>
)



  
    
    
 

} 
export default PainTodos