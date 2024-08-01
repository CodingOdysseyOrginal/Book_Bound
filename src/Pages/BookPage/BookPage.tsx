// src/pages/BookPage.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import books, { Book } from '../../Components/Data/HomePageBook'; // Import your Book type and data
import './BookPage.css'; // Import the CSS file for styling

const BookPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find the book with the given id
  const book: Book | undefined = books.find((book) => book.id === id);

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="bookPage">
      <div className="bookPageContent">
        <img src={book.img} alt={book.title} className="bookPageImage" />
        <div className="bookPageInfo">
          <h1 className="bookPageTitle">{book.title}</h1>
          <p className="bookPageAuthor"><strong>Author:</strong> {book.author}</p>
          <p className="bookPageDescription"><strong>Description:</strong> {book.description}</p>
          <p className="bookPagePrice"><strong>Price:</strong> ${book.price.toFixed(2)}</p>
          <div className="bookPageBasicInfo">
            <h2>Basic Information</h2>
            <p><strong>Title:</strong> {book.title}</p>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Price:</strong> ${book.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
