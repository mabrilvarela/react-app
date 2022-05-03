import { useCartContext } from '../../context/CartContext'
import ItemCount from '../../container/ItemListContainer/ItemCount/ItemCount'

import './ItemDetail.css'

function ItemDetail({ product }) {

  const { addToCart } = useCartContext()

  function onAdd(amount) {
    addToCart({ ...product, amount: amount })
  }

  return (
    <div>
      <div className='detail'>
        <div>
          <img
            src={product.img}
            alt="img-prod"
            style={{ marginLeft: '200px' }} />
        </div>
        <div className='detail-text'>
          <div
            style={{ fontSize: '25px', fontWeight: 'bolder' }}>
            {product.name}
          </div>
          <div>
            {product.description}
          </div>
          <div
            style={{ fontSize: '17px', fontWeight: '500' }}>
            {product.kg}
          </div>
          <div
            style={{ fontSize: '20px', fontWeight: 'bolder' }}>
            ${product.price}
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

