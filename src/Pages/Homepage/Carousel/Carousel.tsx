import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';  // Import Link
import './Carousel.css';
import CrackCode from '../imgs/CrackTheInterview.webp';
import Dune from '../imgs/Dune.webp';
import WillSaveTheGalaxyForCash from "../imgs/WillDestoryTheGalaxyForCash.jpg";

const CarouselComponent: React.FC = () => {
  return (
    <Carousel 
      infiniteLoop 
      showThumbs={false} 
      showStatus={false}
    >
      <div className='HomePageSlide1'>
        <Link to="#" className='Slide1Image'> 
          <img src={CrackCode} alt="Crack the Interview" />
        </Link>
        <div className='Slide1Info'>
          <h1>Cracking the Coding Interview</h1>
          <p>How to crack the coding quiz!</p>
          <Link to="#"><button>Shop Now</button></Link> 
        </div>
      </div>

      <div className='HomePageSlide2'>
        <Link to="#" className='Slide2Image'> 
          <img src={Dune} alt="Dune" />
        </Link>
        <div className='Slide2Info'>
          <h1>Explore the world of Fiction</h1>
          <Link to="/Book_Bound/fiction"><button>Explore Now</button></Link> 
        </div>
        <Link to="#" className='Slide2Image'>
          <img src={WillSaveTheGalaxyForCash} alt="Will Save the Galaxy for Cash" />
        </Link>
      </div>

      <div className='HomePageSlide3'>
        <p className="legend">Slide 3</p>
      </div>
    </Carousel>
  );
}

export default CarouselComponent;
