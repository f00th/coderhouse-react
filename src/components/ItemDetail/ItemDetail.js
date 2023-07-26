import { NavLink } from "react-router-dom"
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id, name, img, price, stock, description}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        addItem(item,quantity)
    }

    return (
        <div>
            <div>
            {name} {img} price: {price} stock: {stock} description: {description}
            </div>
            {
                quantityAdded > 0 ? (
                    <button><NavLink to='/cart' className='Option'>Ir al carrito</NavLink></button>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
        </div>
    
    )
}

export default ItemDetail