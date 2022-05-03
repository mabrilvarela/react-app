import React from 'react'
import { useState } from 'react'
import { ImputCount } from '../../../components/Exchange/Exchange';


import './ItemCount.css'

function ItemCount({ onAdd }) {

  const [change, setChange] = useState(false)
  const inicio = 1;
  const stock = 5;
  const [count, setCount] = useState(inicio)

  function onChange(amount) {
    onAdd(amount)
    setChange(true)
  }

  function add() {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  function eliminate() {
    if (count > inicio) {
      setCount(count - 1)
    }
  }

  return (

    <div className='container'>
      <div className='container-contador'>

        <button
          className='boton'
          onClick={() => eliminate()}

        >
          -
        </button>

        <span className='count'>{count}</span>

        <button
          className='boton'
          onClick={() => add()}

        >
          +
        </button>

      </div>

      {!change ? (
        <div>
          <button
            className='btn btn-outline-danger'
            onClick={() => onChange(count)}

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
