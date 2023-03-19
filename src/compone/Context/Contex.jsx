import axios from 'axios'
import { useState,useEffect,createContext,} from 'react'
import Api from '../../Service/Api/Api'
import PainTodos from '../PainTodos'
import {Prod} from '../../Service/ProductService'




export const DataContext = createContext();  
function SongProvider () {
  const [Data, setData] = useState([]);
  useEffect(()=>{
  const item=async ()=>{
 /*  const url='https://api.escuelajs.co/api/v1/products'
  const  resul=await axios.get(url) */

  let Datas=Prod
  setData(Datas)
  console.log('este la la data de product' ,Datas[0].title
  );
  
  
  
  }
  item()
  
  
  },[])
  console.log('ok',Data);
  
  return (
    <>

   
    <DataContext.Provider value={Data}>
      <Api/>
      <PainTodos/>
    </DataContext.Provider>
    
    </>
  );
}

export default SongProvider
