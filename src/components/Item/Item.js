import { Link } from "react-router-dom"

const Item = ({id, name, img, price}) => {
    return (
        <div>{name} {img} price: {price} <Link to={`/item/${id}`}><button>Detalle</button></Link></div>  
    )
}

export default Item