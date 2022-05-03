import { useCartContext } from "../../context/CartContext"

import './CartList.css'

function CartList() {

    const { cartList, removeItem } = useCartContext()

    return (
        <>
            {cartList.map((prod) => (
                <div key={prod.id} className='cart-item' >
                    <img src={prod.img} alt='img-producto' height='250px' />
                    <div className='cart-select'>
                        <div>
                            Nombre: {prod.name}
                        </div>
                        <div>
                            Precio por unidad: ${prod.price}
                        </div>
                        <div>
                            Cantidad: {prod.amount}
                        </div>
                    </div>
                    <div className='trash'>
                        <button className="btn btn-outline-danger" onClick={() => removeItem(prod.id)}>
                            <img
                                src="https://www.shareicon.net/data/256x256/2016/01/05/698410_trash_512x512.png"
                                alt="trash-icon"
                                width='20px'
                                height='20px'
                                style={{ verticalAlign: 'sub' }} />
                        </button>
                    </div>
                </div>
            )
            )
            }
        </>
    )
}

export default CartList