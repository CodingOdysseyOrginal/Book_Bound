import React from 'react';
import { useCart } from '../../Components/CartContext/CartContext';

const Cart: React.FC = () => {
  const { state } = useCart();

  return (
    <div>
      <h1>Cart</h1>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {state.items.map((item) => (
            <li key={item.id}>
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
              <p>Author: {item.author}</p>
              <p>Price: £{item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
