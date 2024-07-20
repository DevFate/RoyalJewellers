// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Guide from './components/Guide';
import { CartProvider } from './contexts/CartContext';
import OrderHistory from './components/OrderHistory';
import { OrderHistoryProvider } from './contexts/OrderHistoryContext';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <OrderHistoryProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Header user={user} setUser={setUser}/>
            <Routes>
              <Route path="/" element={<ProductGrid />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/signup" element={<SignUp />} />
              {user && <Route path="/profile" element={<Profile user={user} />} />}
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </OrderHistoryProvider>
  );
}

export default App;
