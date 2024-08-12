import React from 'react';
import BookItem from '../../../Components/BookDesign/BookDesign';
import { HomepageBooks } from '../../../Components/Data/HomePageBook';
import './MidSection.css'; 
import { Link } from 'react-router-dom';

const MidSection: React.FC = () => {
  return (
    <div className='MidSectionContainer'>
      <div className='MidSectionInfo'>
      <h1><i>Everyone's Talking About...</i></h1>
      <Link  to="/Book_Bound/bestsellers">
      <button>Bestsellers</button>
      </Link>
      </div>
      <div className="bookList"> 
        {HomepageBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default MidSection;
