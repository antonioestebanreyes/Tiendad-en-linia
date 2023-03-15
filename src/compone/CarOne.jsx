import React from 'react'

function CarOne(props) {
  return (
    <ul>
    { props.Tituto.length===0 &&  <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
 }
    { 
      props.Tituto.map((prodcto,i) => {
        console.log("super",prodcto.title);
const productoPorTitulo=prodcto.title
    
    return(

       <div className='ProductosContainer'>
         
        <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card m-2 p-3" >
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




       </div>








    )
     
   
       
      
     })
    }
 </ul>
    
  );


    
  
}

export default CarOne