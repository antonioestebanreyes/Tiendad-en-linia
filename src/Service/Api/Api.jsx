import {useContext,useRef,useState,useEffect} from 'react'
import {DataContext} from '../../compone/Context/Contex'
import '../../style/Api.css'
import { Link } from 'react-router-dom';
import Nanvar from '../../compone/Nanvar';
import { useNavigate } from 'react-router-dom';


 function  Api  () {

 


 // console.log(props);
  const data = useContext(DataContext);
 console.log(data,"ok");
  const [Data,SetData]=useState(data.data)
  console.log(Data);

   const inputEl = useRef('');
  inputEl.current.value
 
  const CartOne=(productoPorTitulo)=>{
     const Producto=productoPorTitulo.target.outerText
    console.log(Producto);
  let Tititulo=  localStorage.setItem('Titulo',JSON.stringify(Producto))

 let GetTitulo=localStorage.getItem('Titulo')
 console.log('Este es tiutlo men', GetTitulo); 
    



   // console.log(Producto);
  }
  const filter = (event) => {
    Data.forEach(product => {
      if (inputEl.current.value===product.title) {
         const Productos=Data.filter(prodcto=>prodcto.title===inputEl.current.value )
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
   SetData(data.data)

    console.log("regreso al estado anteior ");
   
   }
  
} 
//
  return (
    <>
    <Nanvar/>
      <form >
    {<div className='w-100 bg-primary m-2 p-2'><input className="form-control col-10" onChange={filter}  ref={inputEl} type="search"  placeholder='Buscar......' aria-label="readonly input example"  />
    
    </div>
}
    
   </form>
        <ul>
    {data===false &&  <div className="d-flex justify-content-center">
      
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
         
         <div className="card-group">
  <div className="card m-2 ContenedorImg" >
   <img src={prodcto.images[0]} className="card-img-top Img" alt="..."/>
    <div className="card-body">
    <Link to={'/Producto'}><h5 className="card-title" >{prodcto.title} </h5></Link>  
      <p className="card-text">{prodcto.description} </p>
      <p className="card-text"><small className="text-muted"><strong className='fs-4'>$</strong> {prodcto.price} </small></p>
    </div>
  </div>
  <div className="card m-2 ContenedorImg">
    <img src={prodcto.images[0]} onClick={CartOne} className="card-img-top Img" alt="..."/>
    <div className="card-body">
     <Link to={'/Producto'}><h5 className="card-title" onClick={CartOne}>{prodcto.title} </h5></Link> 
      <p className="card-text">{ prodcto.description} </p>
      <p className="card-text"><small className="text-muted"><strong className='fs-4'>$</strong> {prodcto.price} </small></p>
    </div>
  </div>
  <div className="card m-2 ContenedorImg" >
    <img src={prodcto.images[0]} className="card-img-top Img" alt="..."/>
    <div className="card-body">
   <Link to={'/Producto'}><h5 className="card-title">{prodcto.title} </h5></Link>   
      <p className="card-text"> {prodcto.description} </p>
      <p className="card-text"><small className="text-muted"> <strong className='fs-4 fw-bold'>$</strong> {prodcto.price} </small></p>
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