import { Link } from "react-router-dom";
import cart from "./assets/cart-icon.png";
import "./CartWidget.css";

const CartWidget = () => {

    return (
        <Link to='/cart'>
            <img src={cart} alt='cartWidget' className='cart-image'/>
        </Link>
    )
}

export default CartWidget;