import React, { createContext, useState } from 'react';

const OrderHistoryContext = createContext();

const OrderHistoryProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const updateOrder = (orderId, updatedOrder) => {
    setOrders(orders.map(order => order.id === orderId ? updatedOrder : order));
  };

  return (
    <OrderHistoryContext.Provider value={{ orders, addOrder, updateOrder }}>
      {children}
    </OrderHistoryContext.Provider>
  );
};

export { OrderHistoryContext, OrderHistoryProvider };
