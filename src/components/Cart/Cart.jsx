import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { Link } from 'react-router-dom'

import './Cart.css'

function Cart() {

  const { cartList, removeCart, removeItem, totalPrice } = useCartContext()

  const generateOrder = async (e) => {
    e.preventDefault();

    let order = {}

    order.buyer = { name: 'Paula Gimena', email: 'paugimena@gmail.com', phone: '1125254512' }
    order.total = totalPrice()

    order.products = cartList.map(cartProduct => {
      const id = cartProduct.id
      const nombre = cartProduct.nombre
      const precio = cartProduct.precio * cartProduct.cantidad

      return { id, nombre, precio }
    }) 

    const db = getFirestore() 
    const queryCollection = collection(db, 'orders')
    await addDoc(queryCollection, order)
    .then(({id}) => console.log( id ))

    const idOrder = order.id
    alert('Tu id es ' + idOrder)
  }

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
                  Precio por unidad: ${prod.precio}
                </div>
                <div>
                  Cantidad: {prod.cantidad}
                </div>
              </div>
              <div className='trash'>
                <button onClick={() => removeItem(prod.id)}>
                  <img
                    src="https://www.shareicon.net/data/256x256/2016/01/05/698410_trash_512x512.png"
                    alt="trash-icon"
                    width='20px'
                    height='20px' />
                </button>
              </div>
            </div>)}
        </>
      }
      <div>
        {totalPrice() !== 0 && <h3>Total: ${totalPrice()}</h3>}
      </div>
      <div>
        <button className='btn btn-warning'
          onClick={removeCart}>
          Vaciar Carrito
        </button>
        <button className='btn btn-primary'
          onClick={generateOrder}>
          Generar orden
        </button>
      </div>
    </div>
  )

}

export default Cart