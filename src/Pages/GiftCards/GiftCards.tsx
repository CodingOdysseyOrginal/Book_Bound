import React, { useState } from 'react';
import { useCart } from '../../Components/CartContext/CartContext';
import { Link } from 'react-router-dom';
import './GiftCards.css';
import GiftCardIcon from './Img/giftcard.jpg';

interface GiftCard {
  id: string;
  value: number;
}

const giftCards: GiftCard[] = [
  { id: 'gc1', value: 10 },
  { id: 'gc2', value: 25 },
  { id: 'gc3', value: 50 },
  { id: 'gc4', value: 100 },
];

const GiftCards: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<GiftCard | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    if (selectedCard) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          id: selectedCard.id,
          title: `Gift Card - £${selectedCard.value}`,
          author: 'N/A',
          price: selectedCard.value,
          img: GiftCardIcon,
          description: 'Gift card for purchasing books',  // Dummy value
          format: 'Physical',                            // Dummy value
          published: 'N/A',                              // Dummy value
          pageNumber: 0,                                 // Dummy value
          category: 'Gift Card',                         // Dummy value
        },
      });
      setAddedToCart(true);
    }
  };

  return (
    <div className="giftcards-container">
      <h1>Gift Cards</h1>
      <p className="giftcards-description">
        Give the gift of reading with our bookstore gift cards! Choose from various amounts and let your loved ones pick the perfect book. Ideal for any occasion!
      </p>
      <div className="dropdown-container">
        <select
          onChange={(e) => {
            const card = giftCards.find(g => g.id === e.target.value);
            setSelectedCard(card || null);
            setAddedToCart(false);
          }}
        >
          <option value="">Select a Gift Card Amount</option>
          {giftCards.map((card) => (
            <option key={card.id} value={card.id}>
              £{card.value}
            </option>
          ))}
        </select>
      </div>
      {selectedCard && (
        <div className="selected-card-info">
          <img src={GiftCardIcon} alt="Gift Card" className="giftcard-icon" />
          <h3>Selected Gift Card: £{selectedCard.value}</h3>
          {addedToCart ? (
            <Link to="/Book_Bound/cart" className="add-to-cart-button">
              View Cart
            </Link>
          ) : (
            <button onClick={handleAddToCart} className="add-to-cart-button">
              Add to Cart
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default GiftCards;
