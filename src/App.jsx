
import './App.css'
import Nanvar from './compone/Nanvar'
import Home from './compone/Home'
import {  Routes, Route, } from 'react-router-dom'
import NotFount from './compone/NotFount'
import Login from './compone/Login'
import PainTodos from './compone/PainTodos'
 import Register from './compone/Register' 
 import Dashbord from './pages/dashbord'
function App() {
  return(
    <>
    < Nanvar/>
    <Routes>
    
 {  <Route path='/Formulario' element={<Register/>} />  }
 
  <Route path='/Login' element={<Login/>} /> 
 <Route path='/'element={< Home/>} />
 <Route path='/PainTodos' element={<PainTodos/>} ></Route>
 <Route path='/dashbord' element={<Dashbord/>} />
 <Route path='*' element={< NotFount/>} />

</Routes>

    </>
         )
}

export default App