import './navbar.css';
import FormBusqueda from '../FormBusqueda/FormBusqueda';
import Dropdown from './Dropdown/Dropdown';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../img/logo.png';

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <img src={logo} alt="logo" />
              <a className="navbar-brand" href="#">Jugueteria Cósmica</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
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
