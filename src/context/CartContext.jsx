import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])

    const addToCart = (prod) => {
        const isInCart = cartList.find((prodInCart) => prodInCart.id === prod.id)

        if (isInCart) {
            setCartList(
                cartList.map((prodInCart) => {
                    if (prodInCart.id === prod.id) {
                        return { ...isInCart, amount: isInCart.amount + 1 }
                    } else return prodInCart;
                })
            )
        } else {
            setCartList([...cartList, { ...prod, amount: 1 }])
        }

    }
    
    const deleteProd = (prod) => {
        const isInCart = cartList.find((prodInCart) => prodInCart.id === prod.id)
        if (isInCart.amount === 1) {
            setCartList(cartList.filter((prodInCart) => prodInCart.id !== prod.id))
        } else {
            setCartList((prodInCart) => {
                if (prodInCart.id === prod.id) {
                    return { ...isInCart, amount: isInCart.amount - 1 }
                } else return prodInCart
            })
        }
    }

    const removeCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteProd,
            removeCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider