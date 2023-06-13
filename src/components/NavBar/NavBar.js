import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
                <h1>E-Commerce</h1>
            </Link>
            <div>
                <NavLink to='/item/:itemId'><button>Camas</button></NavLink>
                <NavLink to='/item/:itemId'><button>Mesas</button></NavLink>
                <NavLink to='/item/:itemId'><button>Sillas</button></NavLink>
                <NavLink to='/item/:itemId'><button>Sillones</button></NavLink>
            </div>
            <CartWidget /> 
        </nav>
    )
}

export default NavBar;