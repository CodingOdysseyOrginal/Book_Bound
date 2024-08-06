import React from 'react';
import { useCart } from '../../Components/CartContext/CartContext';
import './Cart.css';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  // Function to handle the removal of an item
  const handleRemove = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  // Function to handle quantity change
  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  // Calculate the total amount
  const totalAmount = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cartContainer">
      <h1>Cart</h1>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cartList">
            {state.items.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.img}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h2>{item.title}</h2>
                  <p>Author: {item.author}</p>
                  <p>Price: £{item.price.toFixed(2)}</p>
                  <div className="cart-item-actions">
                    <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                    <select
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, Number(e.target.value))
                      }
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        )
                      )}
                    </select>
                    <button
                      className="removeButton"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h2>Total Amount: £{totalAmount.toFixed(2)}</h2>
            <button className="checkout-button">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
