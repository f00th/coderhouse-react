import { NavLink } from "react-router-dom";
import cart from "./assets/cart-icon.png";
import "./CartWidget.css";

const CartWidget = () => {

    return (
        <NavLink to='/cart'>
            <img src={cart} alt='cartWidget' className='cart-image'/>
        </NavLink>
    )
}

export default CartWidget;