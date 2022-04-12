import React from 'react'
import { useState } from 'react'
import { ImputCount } from '../../../components/Intercamb/Intercamb';

import './ItemCount.css'

function ItemCount({ onAdd }) {

  const inicio = 1;
  const stock = 5;
  const [count, setCount] = useState(inicio);
  const [change, setChange] = useState(false)

  function onChange(cant) {
    setChange(true)
    onAdd(cant)
  }

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

      {!change ? (
        <div>
          <button
            className='btn btn-outline-danger'
            onClick={() => onChange(count)}
            disabled={stock === 0 ? true : null}
          >
            Agregar al carrito
          </button>
        </div>
      ) :
        (
          <ImputCount />
          )
        }
    </div>
  )
}

export default ItemCount
