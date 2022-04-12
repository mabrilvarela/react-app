import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'

function Cart() {

  const { cartList, removeCart, removeItem, total } = useCartContext()

  return (
    <div className='cart'>
      {cartList.lenght === 0 ?
        <>
          <h2>No hay productos en tu carrito</h2>
          <Link to='/' >
            <button>Volver</button>
          </Link>
        </>
        :
        <>
          {cartList.map(prod =>
            <div className='cart-item' key={prod.id}>
              <img src={prod.img} height='250px' />
              <div className='cart-select'>
                <div>
                  Nombre: {prod.nombre}
                </div>
                <div>
                  Subtotal: ${prod.precio}
                </div>
                <div>
                  Cantidad: {prod.cantidad}
                </div>
              </div>
              <div className='trash'>
                <button onClick={() => removeItem(prod.id)}>
                  <img src="https://www.shareicon.net/data/256x256/2016/01/05/698410_trash_512x512.png" alt="trash-icon" width='20px' height='20px' />
                </button>
              </div>
            </div>)}
        </>
      }
      <div>
        <h3>Total: ${total}</h3>
      </div>
      <div>
        <button className='btn btn-warning'
          onClick={removeCart}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  )

}

export default Cart