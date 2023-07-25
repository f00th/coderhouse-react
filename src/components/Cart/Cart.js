import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0 ) {
        return (
            <div>
                <h1>El carrito no contiene items</h1>
                <NavLink to='/'>Productos</NavLink>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3> 
            <button onClick={() => clearCart()}>Limpiar carrito</button>
            <NavLink to='/checkout'>Finalizar compra</NavLink>
        </div>
    )
}

export default Cart