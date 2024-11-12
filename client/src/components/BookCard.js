import React, { useState } from 'react';
import './BookCard.css';

const BookCard = ({ book, addToCart, cartItems = [], updateQuantity }) => { // Default cartItems to an empty array
  const [quantityVisible, setQuantityVisible] = useState(false);

  const handleAddToCart = () => {
    addToCart(book);
    setQuantityVisible(true);
  };
  

  // Check if cartItems is defined and find the cart item
  const cartItem = cartItems && cartItems.find(item => item.id === book.id);

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-card-image" />
      <h3 className="book-title">{book.title}</h3>
      {book.authors && <p className="book-author">{book.authors.join(', ')}</p>}
      <p className="book-price">${book.price.toFixed(2)}</p>
      <p className="book-description">{book.description}</p>

      {quantityVisible && cartItem ? (
        <div className="quantity-controls">
          <button onClick={() => updateQuantity(book, cartItem.quantity - 1)}>-</button>
          <span>{cartItem.quantity}</span>
          <button onClick={() => updateQuantity(book, cartItem.quantity + 1)}>+</button>
        </div>
      ) : (
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default BookCard;
