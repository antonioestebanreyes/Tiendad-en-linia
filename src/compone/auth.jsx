import { createContext, useState } from "react";
export const Authcontext=createContext()


export function authProvider() {

    const [isAuth,setIsAuth]=useState(false)
 const loginUser=(token)=>{
    sessionStorage.setItem("user",token)
 }
 const logout=()=>{
    sessionStorage.removeItem("token");
    setIsAuth(false)
 }
 const values={
    isAuth,
    loginUser,
    logout
 }
    return (
    <Authcontext.Provider value={values}>
    
    </Authcontext.Provider>
    
    
  )
}

