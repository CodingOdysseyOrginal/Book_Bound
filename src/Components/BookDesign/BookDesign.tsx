import React, { useState } from 'react';
import { Book } from '../Data/HomePageBook';
import './BookDesign.css';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';

interface BookItemProps {
  book: Book;
}

const BookDesign: React.FC<BookItemProps> = ({ book }) => {
  const { dispatch } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: book });
    setIsAdded(true);
  };

  return (
    <div className="card">
      <Link to={`/product/${book.id}`}>
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
          {isAdded ? (
            <Link to="/Book_Bound/cart" className="button added">
              View Cart
            </Link>
          ) : (
            <button
              onClick={handleAddToCart}
              className="button"
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDesign;
