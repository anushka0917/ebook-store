import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import './Home.css';

const Home = ({ books, addToCart, removeFromCart, cartItems }) => {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortOption, setSortOption] = useState('');

  const genres = [
    'Fiction', 'Non-Fiction', 'Horror', 'Fantasy', 'Mystery',
    'Thriller', 'Romance', 'Biography', 'History', 'Self-Help'
  ];

  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    );
  };

  useEffect(() => {
    let result = books;

    if (selectedTags.length > 0) {
      result = result.filter(book => selectedTags.some(tag => book.tags.includes(tag)));
    }

    if (searchTerm) {
      result = result.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
        book.publisher.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption) {
      result = [...result].sort((a, b) => {
        if (sortOption === 'price') return a.price - b.price;
        if (sortOption === 'rating') return b.rating - a.rating;
        if (sortOption === 'date') return new Date(b.uploadDate) - new Date(a.uploadDate);
        return 0;
      });
    }

    setFilteredBooks(result);
  }, [books, searchTerm, selectedTags, sortOption]);

  return (
    <div className="home">
      <h1>Browse Books</h1>
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="filters">
        {genres.map((genre) => (
          <label key={genre}>
            <input
              type="checkbox"
              checked={selectedTags.includes(genre)}
              onChange={() => toggleTag(genre)}
            />
            {genre}
          </label>
        ))}
      </div>
      <select className="sort-select" onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Sort by</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="date">Release Date</option>
      </select>

      <BookList
        books={filteredBooks}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
      />
    </div>
  );
};

export default Home;
