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
    {<input className="form-control"   ref={inputEl} type="search" defaultValue="Readonly input here..." placeholder='Buscar......' aria-label="readonly input example" read OnlyonChange={SeachActualizar} />
}
   <button className='btnEnviar' type="submit"  onClick={filter} ><Link to="/"><i className="bi bi-search SearchIcom  search" ></i> </Link> </button>
   </form>
        <ul>
    {Data.length===0 &&  <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
 }
    { 
      Data.map((prodcto,i) => {
        console.log("super",prodcto.title);

    
    return(

       <div className='ProductosContainer'>
         
        <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title" key={i}>Producto:{ prodcto.title}</h5>
        <div className='contenedorImg'>    <img src={prodcto.images[0]} alt="No cargo la imagen" className="img-thumbnail rounded mx-auto d-block "  key={i}/></div>
        <div className="w-100 h-50 m-t-3"> <a href="#" className="btn btn-primary"><div key3={i} ><p>Descripcion:{prodcto.description} </p><Link to='./' className='hiddenTxtDescripcion'>......ver mas</Link></div>    </a> </div>  
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <h5 className="card-title" key={i}>Producto:{ prodcto.title}</h5>
      <div className='contenedorImg'> <img src={prodcto.images[0]} alt="No cargo la imagen"className="img-thumbnail rounded mx-auto d-block " key={i}/> </div>        
      <div className="w-100 h-50 m-t-3"> <a href="#" className="btn btn-primary"><div key3={i} ><p>Descripcion:{prodcto.description} </p><Link to='./' className='hiddenTxtDescripcion'>......ver mas</Link></div>    </a>  
</div> 




      </div>
    </div>
  </div>
</div>




       </div>








    )
     
   
       
      
     })
    }
 </ul>
    </>
  );


}
  


export default Api