import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
                <h1>E-Commerce</h1>
            </Link>
            <div>
                <Link to='/category/cama'><button>Camas</button></Link>
                <Link to='/category/mesa'><button>Mesas</button></Link>
                <Link to='/category/silla'><button>Sillas</button></Link>
                <Link to='/category/sillon'><button>Sillones</button></Link>
            </div>
            <CartWidget /> 
        </nav>
    )
}

export default NavBar;