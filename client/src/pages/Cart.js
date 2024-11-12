import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} className="cart-item-thumbnail" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Author: {item.authors.join(', ')}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
              <div className="cart-item-quantity">
                <button onClick={() => removeFromCart(item)} className="quantity-btn">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)} className="quantity-btn">+</button>
              </div>
              <p className="cart-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
