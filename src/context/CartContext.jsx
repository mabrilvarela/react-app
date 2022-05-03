import { createContext, useContext, useState } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])

    const addToCart = (prod) => {
        const isInCart = cartList.findIndex(p => prod.id === p.id)

        if (isInCart !== -1) {
            const newCart = cartList
            const newQty = cartList[isInCart].amount + prod.amount
            newCart[isInCart].amount = newQty
            setCartList([...newCart])
        } else {
            setCartList([
                ...cartList,
                prod
            ])
        }
    }

    const deleteProd = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    const removeCart = () => {
        setCartList([])
    }

    const removeItem = id => {
        cartList.forEach((item, index) => {
            if (item.id === id) {
                item.amount = 1;
                cartList.splice(index, 1)
            }
        });
        setCartList([...cartList])
    }

    const totalItems = () => {
        return cartList.reduce((prev, item) => prev += item.amount, 0)
    }

    const totalPrice = () => {
        return cartList.reduce((prev, item) => {
            return prev + (item.price * item.amount)
        }, 0)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteProd,
            removeCart,
            removeItem,
            totalItems,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider