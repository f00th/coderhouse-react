import cart from "./assets/cart-icon.png";
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget" className="cart-image"/>
            0
        </div>
    )
}

export default CartWidget;