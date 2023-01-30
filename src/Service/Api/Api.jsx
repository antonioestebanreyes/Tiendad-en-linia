import {useContext,useRef,useState} from 'react'
import {DataContext} from '../../compone/Context/Contex'
import '../../style/Api.css'
import { Link } from 'react-router-dom';




 function  Api  () {
  const Datas = useContext(DataContext );
  const [Data,SetData]=useState(Datas)
const x= Datas[0]
 console.log(Data);
   const inputEl = useRef('');
  inputEl.current.value
  const filter = (event) => {
    inputEl.current.value
    event.preventDefault()
    if (inputEl.current.value==="") {
      SetData(Datas)
    }
    console.log( inputEl.current.value);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    const Productos=Datas.filter(prodcto=>prodcto.title==inputEl.current.value )
    SetData( Productos)
    
  console.log("este es el fil",Data) 
 } 
console.log( inputEl.current.value);
 const SeachActualizar=()=>{
  if (inputEl.current.value==="") {
    setdata(Datas)

    console.log("regreso al estado anteior ");
   
   }
  
} 

  return (
    <>
      <form >
    { <input ref={inputEl}  className='search' type='search' placeholder='Buscar......' onChange={SeachActualizar} /> }
   <button className='btnEnviar' type="submit"  onClick={filter} ><Link to="/"><i className="bi bi-search SearchIcom " ></i> </Link> </button>
   </form>
        <ul>
    {Data.length===0 && <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="Carga" /> }
    { 
      Data.map((prodcto,i) => {
        console.log("super",prodcto.title);

    
    return(

       <div className='ProductosContainer'>
         <div key1={i} className='ProductoContainerList'> 
           Producto:{ prodcto.title}
         </div>
         <div key2={i}><i className="bi bi-heart"></i></div>
         <img src={prodcto.images[0]} alt="No cargo la imagen" className='imgProductoItem' key={i}/>
         <div><i className="bi bi-handbag"></i></div>
         <div key3={i} className='DescripcionDeProducto'><p>Descripcion:{prodcto.description} </p><Link to='./' className='hiddenTxtDescripcion'>......ver mas</Link></div>
        
       </div>
    )
     
   
       
      
     })
    }
 </ul>
    </>
  );


}
  


export default Api