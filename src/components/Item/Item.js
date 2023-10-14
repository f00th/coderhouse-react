import { NavLink } from "react-router-dom"
import { Button } from 'react-bootstrap'

const Item = ({id, name, img, price}) => {
    return (
        <div>{name} {img} price: {price} <NavLink to={`/item/${id}`}><Button>Detalle</Button></NavLink></div>  
    )
}

export default Item