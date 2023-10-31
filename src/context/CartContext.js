import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [sum, setSum] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(() => {
        const totQuan = cart.reduce((acc, obj) => acc + obj.quantity, 0)
        setTotalQuantity(totQuan)
    }, [cart])

    useEffect(() => {
        const calculatedSum = cart.reduce((acc, obj) => acc + obj.quantity * obj.price, 0)
        setSum(calculatedSum)
    }, [cart])

    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }
    
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, sum, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}