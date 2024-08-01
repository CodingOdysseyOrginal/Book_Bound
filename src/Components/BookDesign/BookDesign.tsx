import React from "react";
import { Book } from "../Data/HomePageBook";
import "./BookDesign.css";
import { Link } from "react-router-dom";

interface BookItemProps {
  book: Book;
}

const BookDesign: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div className="card">
      <Link to={`/product/${book.id}`} >
      <img src={book.img} alt={book.title} />
      </Link>
      <div className="info">
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <p>£{book.price.toFixed(2)}</p>
        <p>{book.format}</p>
        <div className="ButtonGroup button-container">
          <Link to={`/product/${book.id}`} className="button">
            About
          </Link>
          <Link to="#" className="button">
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDesign;
