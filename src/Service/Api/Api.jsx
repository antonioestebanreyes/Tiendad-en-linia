import {useContext,useRef,useState} from 'react'
import {DataContext} from '../../compone/Context/Contex'
import '../../style/Api.css'
import { Link } from 'react-router-dom';
import CarOne from '../../compone/CarOne';




 function  Api  () {
  const Datas = useContext(DataContext );
  const [Data,SetData]=useState(Datas)
const [Cart,SetCart]=useState([])
   const inputEl = useRef('');
  inputEl.current.value
  const CartOne=(productoPorTitulo)=>{
    console.log("ok",productoPorTitulo);
    let tituloDeProducto=productoPorTitulo
  const TituloArticulo=Datas.filter(articulo=>articulo.title===tituloDeProducto)
  SetCart(TituloArticulo)
  console.log(Cart);
  }
  const filter = (event) => {
    Datas.forEach(product => {
      if (inputEl.current.value===product.title) {
         const Productos=Datas.filter(prodcto=>prodcto.title===inputEl.current.value )
    SetData( Productos)
    console.log(Productos);
      }else{
        SeachActualizar()
      }
    });
    inputEl.current.value
   // event.preventDefault()
    console.log( inputEl.current.value);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
   
  console.log("este es el fil",Data) 
 } 
console.log( inputEl.current.value);
 const SeachActualizar=()=>{
  if (inputEl.current.value==="") {
   SetData(Datas)

    console.log("regreso al estado anteior ");
   
   }
  
} 

  return (
    <>
      <form >
    {<div className='w-100 bg-primary m-2 p-2'><input className="form-control col-10" onChange={filter}  ref={inputEl} type="search"  placeholder='Buscar......' aria-label="readonly input example"  OnChange={SeachActualizar} />
    
    </div>
}
    
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
const productoPorTitulo=prodcto.title
    
    return(

       <div className='ProductosContainer'>
         
        <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card m-2 p-3" onClick={() =>CartOne(productoPorTitulo)}>
      <div className="card-body" >
        <h5 className="card-title" key={i}>Producto:{ prodcto.title}  </h5>
        <div className='contenedorImg'>    <img src={prodcto.images[0]} alt="No cargo la imagen" className="img-thumbnail rounded mx-auto d-block "  key={i}/></div>
        <div className="w-100 h-50 m-t-3"> <a href="#" className="btn btn-primary"><div key3={i} ><p>Descripcion:{prodcto.description} </p><Link to='./' className='hiddenTxtDescripcion'>......ver mas</Link></div>    </a> </div>  
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card m-2 p-3">
      <div className="card-body">
      <h5 className="card-title" key={i}>Producto:{ prodcto.title}</h5>
      <div className='contenedorImg'> <img src={prodcto.images[0]} alt="No cargo la imagen"className="img-thumbnail rounded mx-auto d-block " key={i}/> </div>        
      <div className="w-100 h-50 m-t-3"> <a href="#" className="btn btn-primary"><div key3={i} ><p>Descripcion:{prodcto.description} </p><Link to='./' className='hiddenTxtDescripcion'>......ver mas</Link></div>    </a>  
</div> 




      </div>
    </div>
  </div>
</div>


<CarOne Tituto={Cart} />

       </div>








    )
     
   
       
      
     })
    }
 </ul>
    </>
  );


}
  


export default Api