import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <NavLink to='/'>
                <h1>E-Commerce</h1>
            </NavLink>
            <div>
                <NavLink to='/category/cama'><button>Camas</button></NavLink>
                <NavLink to='/category/mesa'><button>Mesas</button></NavLink>
                <NavLink to='/category/silla'><button>Sillas</button></NavLink>
                <NavLink to='/category/sillon'><button>Sillones</button></NavLink>
            </div>
            <CartWidget /> 
        </nav>
    )
}

export default NavBar;