import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import CrackCode from '../imgs/CrackTheInterview.webp';

const CarouselComponent: React.FC = () => {
  return (
    <Carousel 
      infiniteLoop 
      showThumbs={false} 
      showStatus={false}
    >
      <div className='HomePageSlide1'>
        <div className='Slide1Image'><img src={CrackCode} alt="Crack the Interview" /></div>
        <div className='Slide1Info'>
          <h1>Cracking the coding interview</h1>
          <p>How to crack the coding quiz!</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div>
        <img src="path/to/your/image2.jpg" alt="Slide 2" />
        <p className="legend">Slide 2</p>
      </div>
      <div>
        <img src="path/to/your/image3.jpg" alt="Slide 3" />
        <p className="legend">Slide 3</p>
      </div>
    </Carousel>
  );
}

export default CarouselComponent;
