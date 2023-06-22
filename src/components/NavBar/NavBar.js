import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
                <h1>E-Commerce</h1>
            </Link>
            <div>
                <NavLink to='/category/:categoryId'><button>Camas</button></NavLink>
                <NavLink to='/category/:categoryId'><button>Mesas</button></NavLink>
                <NavLink to='/category/:categoryId'><button>Sillas</button></NavLink>
                <NavLink to='/category/:categoryId'><button>Sillones</button></NavLink>
            </div>
            <CartWidget /> 
        </nav>
    )
}

export default NavBar;