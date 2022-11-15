import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './app.css';
import Navbar from './Navbar/Navbar';
//import ItemCount from './ItemCount/ItemCount';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';

const App =() =>{

  
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>  //home
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>  
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>

    </>
    
  );
}

export default App;
