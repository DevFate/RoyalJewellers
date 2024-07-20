import React, { useContext } from 'react';
import { OrderHistoryContext } from '../contexts/OrderHistoryContext';
import './OrderHistory.css';

const OrderHistory = () => {
  const { orders, updateOrder } = useContext(OrderHistoryContext);

  const handleReturn = (orderId) => {
    updateOrder(orderId, { ...orders.find(order => order.id === orderId), status: 'Return Requested', returnable: false });
  };

  return (
    <div className="order-history">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="order-card">
            <h3>Order #{order.id}</h3>
            <p>Date: {order.date}</p>
            <p>Total: ${order.total}</p>
            <p>Status: {order.status}</p>
            <p>Tracking: {order.tracking}</p>
            <h4>Items:</h4>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price} x {item.quantity}
                </li>
              ))}
            </ul>
            {order.returnable && (
              <button onClick={() => handleReturn(order.id)}>Return Order</button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
