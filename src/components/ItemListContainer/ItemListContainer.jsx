import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import './itemListContainer.css';
import {consultarBDD} from '../../assets/funciones.js';

const ItemListContainer = ({})=> {
    
    const [productos, setProductos]= useState([]);

    useEffect(() => {
        consultarBDD('./json/productos.json').then(productos => {
            const cardProductos = ItemList({productos})
              setProductos(cardProductos)
        })
    },[]);


    return(
        <div className='row'>
            {productos}
        </div>
        
    );
}

export default ItemListContainer;