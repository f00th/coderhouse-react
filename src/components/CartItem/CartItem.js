const CartItem = ({id, name, img, price}) => {
    return (
        <div>{name} {img} price: {price}</div>
    )
}

export default CartItem