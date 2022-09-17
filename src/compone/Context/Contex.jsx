import axios from 'axios'
import { useState,useEffect,createContext,} from 'react'
import Api from '../../Service/Api/Api'
import PainTodos from '../PainTodos'
import {  Routes, Route } from 'react-router-dom'



export const DataContext = createContext();  
function SongProvider () {
  const [Data, setData] = useState([]);
  useEffect(()=>{
  const item=async ()=>{
  const url='https://ecomerce-master.herokuapp.com/api/v1/item'
  const  resul=await axios.get(url)
  let Datas=resul.data
  
  
  setData(Datas)
  
  
  }
  item()
  
  console.log(Data);
  },[])
  
  
  return (
    <>

   
    <DataContext.Provider value={Data}>
      <Api/>
    </DataContext.Provider>
    
    </>
  );
}

export default SongProvider
