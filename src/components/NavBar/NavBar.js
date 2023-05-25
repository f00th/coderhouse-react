import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h1>E-Commerce</h1>
            <div>
                <button>Camas</button>
                <button>Mesas</button>
                <button>Sillas</button>
                <button>Sillones</button>
            </div>
            <CartWidget /> 
        </nav>
    )
}

export default NavBar;