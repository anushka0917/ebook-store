// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import './App.css';

// Define the sampleBooks array here
const sampleBooks = [
  {
    id: 1,
    title: 'The Great Gatsby',
    authors: ['F. Scott Fitzgerald'],
    price: 10.99,
    thumbnail: '/Users/anushkavermanamdeo/Downloads',
    tags: ['Classic', 'Fiction'],
    publisher: 'Scribner',
    uploadDate: '2023-01-01',
    description: 'A novel set in the Roaring Twenties that explores themes of wealth and love.',
  },
  {
    id: 2,
    title: '1984',
    authors: ['George Orwell'],
    price: 9.99,
    thumbnail: 'path/to/1984-thumbnail.jpg',
    tags: ['Dystopian', 'Fiction'],
    publisher: 'Secker & Warburg',
    uploadDate: '2023-01-02',
    description: 'A dystopian novel about totalitarianism and surveillance.',
  },
  {
    id: 3,
    title: 'A Brief History of Time',
    authors: ['Stephen Hawking'],
    price: 15.99,
    thumbnail: 'path/to/brief-history-thumbnail.jpg',
    tags: ['Science', 'Non-fiction'],
    publisher: 'Bantam Books',
    uploadDate: '2023-03-01',
    description: 'An exploration of the nature of time and the universe.',
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    authors: ['Jane Austen'],
    price: 9.99,
    thumbnail: 'path/to/pride-and-prejudice-thumbnail.jpg',
    tags: ['Romance', 'Classic'],
    publisher: 'T. Egerton',
    uploadDate: '2023-04-01',
    description: 'A romantic novel that critiques the British landed gentry at the end of the 18th century.',
  },
  {
    id: 5,
    title: 'Harry Potter and the Sorcerer’s Stone',
    authors: ['J.K. Rowling'],
    price: 11.99,
    thumbnail: 'path/to/harry-potter-thumbnail.jpg',
    tags: ['Fantasy', 'Adventure'],
    publisher: 'Bloomsbury',
    uploadDate: '2023-05-01',
    description: 'The first book in the Harry Potter series, introducing young wizard Harry Potter.',
  },
  {
    id: 6,
    title: 'The Art of War',
    authors: ['Sun Tzu'],
    price: 8.99,
    thumbnail: 'path/to/art-of-war-thumbnail.jpg',
    tags: ['Philosophy', 'Strategy'],
    publisher: 'Unknown',
    uploadDate: '2023-06-01',
    description: 'An ancient Chinese military treatise on strategy and tactics.',
  },
  {
    id: 7,
    title: 'The Catcher in the Rye',
    authors: ['J.D. Salinger'],
    price: 10.99,
    thumbnail: 'path/to/catcher-thumbnail.jpg',
    tags: ['Literature', 'Coming-of-Age'],
    publisher: 'Little, Brown and Company',
    uploadDate: '2023-07-01',
    description: 'A story about teenage angst and alienation, narrated by the iconic Holden Caulfield.',
  },
  {
    id: 8,
    title: 'Becoming',
    authors: ['Michelle Obama'],
    price: 13.99,
    thumbnail: 'path/to/becoming-thumbnail.jpg',
    tags: ['Biography', 'Inspirational'],
    publisher: 'Crown Publishing Group',
    uploadDate: '2023-08-01',
    description: 'A memoir by the former First Lady of the United States, reflecting on her life and experiences.',
  },
  {
    id: 9,
    title: 'The Da Vinci Code',
    authors: ['Dan Brown'],
    price: 14.99,
    thumbnail: 'path/to/da-vinci-thumbnail.jpg',
    tags: ['Thriller', 'Mystery'],
    publisher: 'Doubleday',
    uploadDate: '2023-09-01',
    description: 'A gripping modern mystery that explores historical and religious themes.',
  },
  {
    id: 10,
    title: 'Cooking for Beginners',
    authors: ['Jamie Oliver'],
    price: 16.99,
    thumbnail: 'path/to/cooking-thumbnail.jpg',
    tags: ['Cooking', 'Food'],
    publisher: 'Penguin Books',
    uploadDate: '2023-10-01',
    description: 'A cookbook that teaches the basics of cooking for novices.',
  },
  {
    id: 11,
    title: 'The Power of Habit',
    authors: ['Charles Duhigg'],
    price: 12.99,
    thumbnail: 'path/to/power-of-habit-thumbnail.jpg', // Replace with the actual path to the thumbnail
    tags: ['Self-Help', 'Psychology'],
    publisher: 'Random House',
    uploadDate: '2023-10-15',
    description: 'An exploration of the science behind habit formation in our lives, companies, and societies.',
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prevItems) => {
      const existingBook = prevItems.find((item) => item.id === book.id);
      if (existingBook) {
        // If the book is already in the cart, increase its quantity
        return prevItems.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the book is not in the cart, add it with a quantity of 1
        return [...prevItems, { ...book, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (book) => {
    setCartItems((prevItems) => {
      const existingBook = prevItems.find((item) => item.id === book.id);
      if (existingBook.quantity === 1) {
        // Remove the book if the quantity is 1
        return prevItems.filter((item) => item.id !== book.id);
      } else {
        // Decrease the quantity if it is more than 1
        return prevItems.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };
  
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Ebook Store</h1>
        </header>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home books={sampleBooks} addToCart={addToCart} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Remove BookDetails route if not needed */}
            <Route path="/cart" element={<Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;