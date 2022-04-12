import { useCartContext } from '../../context/CartContext'
import './CardWidget.css'

function CardWidget() {

  const { cartList } = useCartContext()

  return (
    <div>
      <img 
      src="https://www.em-tools.es/media/faq/tmp/icon/shopping-cart-of-checkered-design.png" 
      className="carrito" 
      alt="icono-carrito" />
      <span className='itemTotal'> {cartList.lenght} </span>
    </div>
  )
}

export default CardWidget