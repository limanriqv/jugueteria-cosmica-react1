import { Link } from 'react-router-dom';
import './navbar.css';
import FormBusqueda from '../FormBusqueda/FormBusqueda';
import Dropdown from './Dropdown/Dropdown';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../img/logo.png';

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className='nav-item'>
                    <img src={logo} alt="logo" />
                  </li>

                  <li className="nav-item">
                    <Link className='nav-link' to="/">
                      <a className="navbar-brand" href="#">Jugueteria Cósmica</a>
                    </Link>
                  </li>
                
                  <Dropdown/>
                </ul>
              </div>
              <FormBusqueda busqueda ={"Buscar productos"}/>
              <CartWidget/>
            </div>
            </nav>
    );
}

export default Navbar;
