const CartItem = ({id, name, img, price, quantity}) => {
    return (
        <div>item: {name} {img} quantity: {quantity} price: {price} subtotal: {quantity*price}</div>
    )
}

export default CartItem