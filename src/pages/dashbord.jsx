import React from 'react'
import { useState, createContext, useContext } from "react"
import  {AuthContext} from '../compone/auth.jsx';
function dashbord() {
 const   {isAuth}= useContext(AuthContext);
 const data = useContext(AuthContext);
 console.log(isAuth);
  //console.log(isAuth,'este el isAuth');
   if (data===true) {
    
   
  return (
    <div>
  <h1>Este es el dashbord</h1>
    </div>
   
  )}else{
    return(
      <div>
        No esta logiado
      </div>
    )
  }
}

export default dashbord