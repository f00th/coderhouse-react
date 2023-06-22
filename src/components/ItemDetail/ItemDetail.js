const ItemDetail = ({id, name, img, price, stock, description}) => {
    return (
        <div>{name} {img} price: {price} stock: {stock} description {description}</div>
    )
}

export default ItemDetail