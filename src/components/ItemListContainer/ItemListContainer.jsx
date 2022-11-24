import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import './itemListContainer.css';
import {consultarBDD} from '../../assets/funciones.js';
import { useParams } from 'react-router-dom';

const ItemListContainer = ()=> {
    
    const [productos, setProductos]= useState([]);
    const { category } = useParams()

    useEffect(() => {
        if(category){
            consultarBDD('../json/productos.json').then(products => {
                const productsList = products.filter(prod => prod.idCategoria === parseInt(category))
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        } else {
            consultarBDD('../json/productos.json').then(productsList => {
                const cardProductos = ItemList({productsList})
                setProductos(cardProductos)
            })
        }
       
    },[]);


    return(
        <div className='row'>
            {productos}
        </div>
        
    );
}

export default ItemListContainer;