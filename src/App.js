import React, { useState } from 'react';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

{/*const Root = () => {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/cart">Cart</Link>
    <Outlet />
  
    </>
  );
}; Root is not necessary */}

function App() {
  const [ cartItems, setCartItems ] = useState([]);

  const addToCart = item => {
    setCartItems([...cartItems, item])
  }
  
  return (

  <Router>
    <Routes>
        <Route>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart cartItems={cartItems}/>} />
          <Route path="/product-details/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="*" element={<Navigate to ="/home" replace />} />
        </Route>
      </Routes>
  </Router>

  );
}
export default App;
