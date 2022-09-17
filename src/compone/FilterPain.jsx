
import React from 'react'

function FilterPain({Pain}) {
  {
    Pain.forEach(element => {
      console.log(element);
    });
  }

  return (
    <div>
     <ul>
      <li>{element} </li>
     </ul>
    </div>
  )
}

export default FilterPain