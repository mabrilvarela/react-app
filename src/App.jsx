import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CardWidget from './components/CardWidget/CardWidget';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import CartContextProvider from './context/CartContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
          <Route path="/card" element={<CardWidget />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
