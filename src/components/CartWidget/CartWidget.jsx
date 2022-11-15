import React from 'react';
import './cartWidget.css';
import { Link } from 'react-router-dom';

import carrito from '../../img/carrito-de-compras.png';

const CartWidget = () => {
    return (
        <div>
            <Link className='nav-link' to="/Cart">
       
                <img className='carrito1' src={carrito} alt="carrito" />

            </Link>
            
        </div>
    );
}

export default CartWidget;
