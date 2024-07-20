import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import CartIcon from '../Assets/shopping-cart.svg';

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('loggedInUser');
    setUser(null);
    navigate('/');
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/guide">Guide</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/order-history">Order History</Link></li>
          {!user && <li><Link to="/login">Login</Link></li>}
          {!user && <li><Link to="/signup">Sign Up</Link></li>}
          {user && (
            <li className="profile-menu">
              <button onClick={toggleDropdown}>Profile</button>
              {dropdownVisible && (
                <ul className="dropdown">
                  <li><Link to="/profile">View Profile</Link></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
              )}
            </li>
          )}
        </ul>
      </nav>
      <Link to="/cart">
        <img src={CartIcon} alt="Cart" className="cart-icon" />
      </Link>
    </header>
  );
};

export default Header;
