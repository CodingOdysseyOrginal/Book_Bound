import React from 'react';
import './Homepage.css';
import CarouselComponent from './Carousel/Carousel';

const Homepage: React.FC = () => {
  return (
    <section className='Container'>
      <CarouselComponent />
      Homepage
    </section>
  );
}

export default Homepage;
