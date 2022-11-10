import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './app.css';
import Navbar from './Navbar/Navbar';
//import ItemCount from './ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';
import Producto from './Producto/Producto';
import Carrito from './Carrito/Carrito';

const App =() =>{

  
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemList/>}/>  //home
        <Route path='/producto/:id' element={<Producto/>}/>  
        <Route path='/carrito' element={<Carrito/>}/>
      </Routes>
    </BrowserRouter>

    </>
    
  );
}

export default App;
