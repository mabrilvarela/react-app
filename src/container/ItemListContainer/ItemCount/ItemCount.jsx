import React from 'react'
import {useState} from 'react'

import './ItemCount.css'

function ItemCount({onAdd}) {

    const inicio = 1;

    const stock = 5;

    const [count, setCount] = useState(inicio);

    const añadirProd = (num) => {

        setCount(count + num);
    }

  return (

    <div className='container'>
      <div className='container-contador'>

        <button 
                className='boton' 
                onClick={() => añadirProd(-1)}
                disabled={count === inicio ? true : null}
        >
          -
        </button> 

        <span className='count'>{count}</span>

        <button 
                className='boton' 
                onClick={() => añadirProd(+1)}
                disabled={count === stock ? true : null}
        >
          +
        </button>

      </div>  

      <button 
              className='agregar' 
              onClick={() => onAdd(count)}
              disabled={stock === 0 ? true : null}
      >
        Agregar
      </button>

    </div>
  )
}

export default ItemCount