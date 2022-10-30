import React from 'react';
import './cartWidget.css';

import carrito from '../../img/carrito-de-compras.png';

const CartWidget = () => {
    return (
        <div>
       
            <img className='carrito1' src={carrito} alt="carrito" />
            
        </div>
    );
}

export default CartWidget;
