import React from 'react';
import BookItem from '../../../Components/BookDesign/BookDesign';
import books from '../../../Components/Data/HomePageBook';
import './MidSection.css'; 

const MidSection: React.FC = () => {
  return (
    <div className='MidSectionContainer'>
      <h1><i>Everyone's Talking About...</i></h1>
      <div className="bookList"> 
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default MidSection;
