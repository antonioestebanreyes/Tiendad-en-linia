import { createContext } from "react";
import {isAuth} from "../auth";
import Dashbord from "../../pages/dashbord";
export const AuthContext=createContext()
import React from 'react'

function auth() {
  return (
<AuthContext.Provider value={ isAuth}>
<Dashbord/>    
</AuthContext.Provider>

  )
}

export {
   auth
}