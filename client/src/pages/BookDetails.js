// src/pages/BookDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = ({ books }) => {
  const { id } = useParams();
  const book = books.find(book => book.id === parseInt(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <img src={book.thumbnail} alt={book.title} className="book-thumbnail" />
      <p><strong>Authors:</strong> {book.authors.join(', ')}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <p><strong>Rating:</strong> {book.rating || 'N/A'}</p>
      <p><strong>Release Date:</strong> {book.uploadDate}</p>
      <p><strong>Description:</strong> {book.description || 'No description available'}</p>
      <p><strong>Price:</strong> ${book.price.toFixed(2)}</p>
      <button onClick={() => addToCart(book.id)}>Add to Cart</button>
    </div>
  );

  function addToCart(bookId) {
    // Handle the add to cart functionality here
    alert(`Book with ID: ${bookId} added to cart!`);
  }
};

export default BookDetails;
