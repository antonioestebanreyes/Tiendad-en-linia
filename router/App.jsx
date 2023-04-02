
import '../src/App.css'
//import Nanvar from '../src/compone/Nanvar'
import Home from '../src/compone/Home'
import {  Routes, Route, } from 'react-router-dom'
import NotFount from '../src/compone/NotFount'
import Login from '../src/compone/Login'
//import PainTodos from '../src/compone/PainTodos'
 import Register from '../src/compone/Register' 
 import Dashbord from '../src/pages/dashbord'
import Carone from '../src/compone/CarOne'

function App() {
  
  return(
    <>
    
   
    
    
    <Routes>
    
 {  <Route path='/Formulario' element={<Register/>} />  }
 
  <Route path='/Login' element={<Login/>} /> 
 <Route path='/'element={< Home/>} />
    <Route
      path='/Dashbord'
        element={ <Dashbord />}
      />
      <Route path='/Producto' element={<Carone/>} />
      
    

 <Route path='*' element={< NotFount/>} />

</Routes>

    </>
         )
}

export default App