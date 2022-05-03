import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import CartList from '../CartList/CartList'
import CartForm from '../CartForm/CartForm'

import './Cart.css'

function Cart() {

  const { cartList, removeCart, totalPrice } = useCartContext()

  return (
    <div>
      {cartList.length === 0 ? (
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ margin: '20px' }}>No hay productos en tu carrito</h4>
          <Link to='/'>
            <button className='btn btn-success'>Volver</button>
          </Link>
        </div>
      )
        : (
          <div className='cart'>
            <div style={{ justifySelf: 'end', marginLeft: '150px' }}>
              <h2 style={{ margin: '20px' }}>Tu carrito</h2>
              <div>
                <CartList />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {totalPrice() !== 0 &&
                  <h3 style={{ marginBottom: '15px', marginTop: '0px' }}>
                    Total: ${totalPrice()}
                  </h3>
                }
                {totalPrice() !== 0 &&
                  <button className='btn btn-warning'
                    style={{ alignSelf: 'center' }}
                    onClick={removeCart}>
                    Vaciar Carrito
                  </button>
                }
              </div>
            </div>
            <CartForm />
          </div>
        )
      }
    </div>
  )
}

export default Cart

