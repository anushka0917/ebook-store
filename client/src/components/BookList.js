import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, addToCart }) => {
    return (
        <div className="book-list">
            {books.map((book) => (
                <BookCard key={book.id} book={book} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default BookList;
