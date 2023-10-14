import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { Button } from 'react-bootstrap';

const NavBar = () => {
    return (
        <nav>
            <NavLink to='/'>
                <h1>E-Commerce</h1>
            </NavLink>
            <div class='row' className='categorys'>
                <NavLink to='/category/cama' class="col-3"><Button>Camas</Button></NavLink>
                <NavLink to='/category/mesa' class="col-3"><Button>Mesas</Button></NavLink>
                <NavLink to='/category/silla' class="col-3"><Button>Sillas</Button></NavLink>
                <NavLink to='/category/sillon' class="col-3"><Button>Sillones</Button></NavLink>
            </div>
            <CartWidget /> 
        </nav>
    )
}

export default NavBar;