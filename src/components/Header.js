// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import cartIcon from '../Assets/shopping-cart.svg'; // Import the SVG file

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/guide">GUIDE</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          
        </ul>
      </nav>
      <div className="cart">
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" className="cart-icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
