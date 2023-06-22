import { NavLink } from "react-router-dom"

const Item = ({id, name, img, price}) => {
    return (
        <div>{name} {img} price: {price} <NavLink to={`/item/${id}`}><button>Detalle</button></NavLink></div>
        
    )
}

export default Item