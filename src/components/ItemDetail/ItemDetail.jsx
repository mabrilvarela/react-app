import { useCartContext } from '../../context/CartContext'
import ItemCount from '../../container/ItemListContainer/ItemCount/ItemCount'

import './ItemDetail.css'

function ItemDetail({ producto }) {

  const {addToCart, cartList} = useCartContext()

  function onAdd(cant) {
    addToCart( {...producto, cantidad: cant} )
  }

  console.log(cartList);

  return (
    <div>
      <div className='detail'>
        <div>
          <img
            src={producto.img}
            style={{ marginLeft: '200px' }} />
        </div>
        <div className='detail-text'>
          <div
            style={{ fontSize: '25px', fontWeight: 'bolder' }}>
            {producto.nombre}
          </div>
          <div>
            {producto.descripcion}
          </div>
          <div
            style={{ fontSize: '17px', fontWeight: '500' }}>
            {producto.kg}
          </div>
          <div
            style={{ fontSize: '20px', fontWeight: 'bolder' }}>
            ${producto.precio}
          </div>
          <div>
            <ItemCount inicio={1} stock={5} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail

