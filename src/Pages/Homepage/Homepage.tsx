import React from 'react';
import './Homepage.css';
import CarouselComponent from './Carousel/Carousel';
import MidSection from './MidSection/MidSection';

const Homepage: React.FC = () => {
  return (
    <section className='Container'>
      <CarouselComponent />
      <MidSection/>
    </section>
  );
}

export default Homepage;
