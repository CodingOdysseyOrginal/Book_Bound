import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import books, { Book } from "../../Components/Data/HomePageBook";
import { useCart } from "../../Components/CartContext/CartContext";
import "./BookPage.css";

const BookPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const book: Book | undefined = books.find((book) => book.id === id);

  if (!book) {
    return <div>Book not found!</div>;
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: book });
    setIsAdded(true);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="bookPage">
      <div className="bookPageImg">
        <img src={book.img} alt={book.title} />
      </div>
      <div className="bookPageInfo">
        <h1>{book.title}</h1>
        <h2>By {book.author}</h2>
        <div className="BookPageInfo2">

        <h3>Page Number: {book.pageNumber}</h3>
        <h3>{book.format}</h3>
        <h3>Published: {book.published}</h3>
        <h3>£ {book.price}</h3>
        </div>
        <p className="bookDescription">{book.description}</p>
       
      </div>
      <div className="buttonGroup">
        {isAdded ? (
          <button 
            onClick={() => navigate("/Book_Bound/cart")} 
            className="button added"
          >
            View Cart
          </button>
        ) : (
          <button 
            onClick={handleAddToCart} 
            className="button"
          >
            Add To Cart
          </button>
        )}
        <button 
          onClick={handleGoBack} 
          className="button"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default BookPage;
