import axios from 'axios'
import {createContext,} from 'react'
import Api from '../../Service/Api/Api'
import {Data} from '../../Service/ProductService'
//import { TarjenaProducto } from '../TarjenaProducto';



console.log(Data);
;

export const DataContext = createContext();  
function SongProvider () {

  
  return (
    <>

   
    <DataContext.Provider value={Data}>
     
     
     <Api/>
    
    </DataContext.Provider>
    
    </>
  );
}

export default SongProvider



