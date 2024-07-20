import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { OrderHistoryContext } from '../contexts/OrderHistoryContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, subtotal, clearCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderHistoryContext);

  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardNumber: '',
    cardExpiry: '',
    cvv: '',
    address: '',
    unit: '',
    postalCode: '',
    comments: ''
  });
  const [isCheckout, setIsCheckout] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    const order = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      items: cartItems,
      total: (subtotal + subtotal * 0.13 + subtotal * 0.02 + 6).toFixed(2),
      status: 'Processing',
      returnable: false,
      tracking: 'Order is being processed'
    };
    addOrder(order);
    clearCart();
    setIsCheckout(true);
  };

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
        <form onSubmit={handleCheckout}>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

          <label>Payment Method:</label>
          <select value={paymentMethod} onChange={handlePaymentMethodChange} required>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>

          {paymentMethod === 'creditCard' && (
            <>
              <label>Card Number:</label>
              <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} required />

              <label>Card Expiry:</label>
              <input type="text" name="cardExpiry" value={formData.cardExpiry} onChange={handleInputChange} required />

              <label>CVV:</label>
              <input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} required />
            </>
          )}

          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />

          <label>Unit #:</label>
          <input type="text" name="unit" value={formData.unit} onChange={handleInputChange} />

          <label>Postal Code:</label>
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} required />

          <label>Additional Comments:</label>
          <textarea name="comments" value={formData.comments} onChange={handleInputChange}></textarea>

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
      {isCheckout && (
        <div className="confirmation-overlay">
          <div className="confirmation-box">
            <h2>Thank you for your order!</h2>
            <p>Your order has been placed successfully.</p>
            <button onClick={() => setIsCheckout(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
