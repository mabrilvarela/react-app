import { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useCartContext } from '../../context/CartContext'

import './CartForm.css'

function CartForm() {

    const { cartList, totalPrice } = useCartContext()

    const [form, setForm] = useState({
        name: '',
        surname: '',
        phone: '',
        email: ''
    })

    const generateOrder = async (event) => {
        event.preventDefault();

        const db = getFirestore()
        const prodCollection = collection(db, 'orders')

        let order = {}
        order.buyer = form
        order.total = totalPrice()
        order.products = cartList.map(cartProduct => {
            const id = cartProduct.id
            const name = cartProduct.name
            const price = cartProduct.price * cartProduct.amount

            return { id, name, price }
        })

        await addDoc(prodCollection, order)
            .then(({ id }) => alert("EL ID DE TU COMPRA ES " + id))
    }

    const changeForm = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div style={{ justifySelf: 'start', textAlign: 'center', marginLeft: '80px' }}>
            {totalPrice() !== 0 &&
                <form onSubmit={generateOrder}
                    style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
                >
                    <h2 style={{ marginTop: '20px' }}>Formulario de compra</h2>
                    Nombres:
                    <input name='name' type="text" placeholder='Ingrese nombres'
                        className='widthImput'
                        onChange={changeForm}
                        value={form.name}
                    />
                    Apellidos:
                    <input name='surname' type="text" placeholder='Ingrese apellidos'
                        className='widthImput'
                        onChange={changeForm}
                        value={form.surname}
                    />
                    Teléfono:
                    <input name='phone' type="text" placeholder='Ingrese teléfono'
                        className='widthImput'
                        onChange={changeForm}
                        value={form.phone}
                    />
                    E-mail:
                    <input name='email' type="email" placeholder='Ingrese e-mail'
                        className='widthImput'
                        onChange={changeForm}
                        value={form.email}
                    />
                    Repetir e-mail:
                    <input name='email' type="email" placeholder='Ingrese e-mail'
                        className='widthImput'
                        onChange={changeForm}
                        value={form.email}
                    />
                    <button className='btn btn-primary'
                        style={{ alignSelf: 'center', marginTop: '20px' }}
                    >
                        Generar orden
                    </button>
                </form>
            }
        </div>
    )
}

export default CartForm