// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, subtotal } = useContext(CartContext);

  const tax = subtotal * 0.13;
  const otherFee = subtotal * 0.02;
  const deliveryCharge = 6.00;
  const total = subtotal + tax + otherFee + deliveryCharge;

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <div className="cart-item-quantity">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>Quantity: {item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="order-form">
        <h2>Order Summary</h2>
        <form>
          <label>Full Name:</label>
          <input type="text" name="fullName" required />

          <label>Email:</label>
          <input type="email" name="email" required />

          <label>Card Number:</label>
          <input type="text" name="cardNumber" required />

          <label>Card Expiry:</label>
          <input type="text" name="cardExpiry" required />

          <label>CVV:</label>
          <input type="text" name="cvv" required />

          <label>Address:</label>
          <input type="text" name="address" required />

          <label>Unit #:</label>
          <input type="text" name="unit" />

          <label>Postal Code:</label>
          <input type="text" name="postalCode" required />

          <label>Additional Comments:</label>
          <textarea name="comments"></textarea>

          <div className="order-summary">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax (13%): ${tax.toFixed(2)}</p>
            <p>Delivery Charge: ${deliveryCharge.toFixed(2)}</p>
            <p>Other Fee: ${otherFee.toFixed(2)}</p>
            
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>

          <button type="submit">Checkout</button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
