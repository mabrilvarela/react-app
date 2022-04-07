import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])

    function isInCart(id) {
        const item = cartList.find(prod => prod.id === id)
        if (item === undefined) {
            return false
        } else {
            return true
        }
    }

    const addToCart = (prod, id, counter) => {
        if (isInCart(id)) {
            const oldCart = cartList.find(prod => prod.id === id)
            const newNumber = oldCart.newCant + counter
            const newProduct = { id: prod.id, categoria: prod.categoria, nombre: prod.nombre, precio: prod.precio, kg: prod.kg, descripcion: prod.descripcion, img: prod.img, newCant: newNumber }
            const noDuplicate = cartList.filter(prod => prod.id = !id)
            const newCart = [...noDuplicate, newProduct]
            setCartList(newCart)
        } else {
            const newItem = { id: prod.id, categoria: prod.categoria, nombre: prod.nombre, precio: prod.precio, kg: prod.kg, descripcion: prod.descripcion, img: prod.img }
            setCartList([
                ...cartList,
                newItem
            ])
        }
    }

    const eliminateId = (id) => {
        const idCart = cartList.filter(prod => prod.id !== id)
        setCartList(idCart)
    }

    const removeCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeCart,
            eliminateId
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider