import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, sum} = useContext(CartContext)

    if(totalQuantity === 0 ) {
        return (
            <div>
                <h1>El carrito no contiene items</h1>
                <button><NavLink to='/'>Productos</NavLink></button>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${sum}</h3> 
            <button onClick={() => clearCart()}>Limpiar carrito</button>
            <button><NavLink to='/checkout'>Finalizar compra</NavLink></button>
        </div>
    )
}

export default Cart