import { useCartContext } from '../../context/CartContext'

function Cart() {

  const { cartList, removeCart } = useCartContext()

  return (
    <div>
      {cartList.map(prod => <li key={prod.id}> nombre: {prod.nombre} cantidad: {prod.cantidad}</li>)}
      <button className='btn btn-outline-warning' onClick={removeCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart