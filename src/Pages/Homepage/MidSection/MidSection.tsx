import React from 'react';
import BookItem from '../../../Components/BookDesign/BookDesign';
import books from '../../../Components/Data/HomePageBook';
import './MidSection.css'; 

const MidSection: React.FC = () => {
  return (
    <div className='MidSectionContainer'>
      <div className='MidSectionInfo'>
      <h1><i>Everyone's Talking About...</i></h1>
      <button>Bestsellers</button>
      </div>
      <div className="bookList"> 
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default MidSection;
