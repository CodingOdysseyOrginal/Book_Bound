import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';  // Import Link
import './Carousel.css';
import CrackCode from '../imgs/CrackTheInterview.webp';
import Dune from '../imgs/Dune.webp';
import WillSaveTheGalaxyForCash from "../imgs/WillDestoryTheGalaxyForCash.jpg";
import ACourtOfThornsAndRoses from "../imgs/ACourtOfThornsAndRoses.jpg"
import KingsOfTheWild from "../imgs/KingsOfTheWyld.jpg";
import ManKind from "../imgs/ManKind.jpg";
import PrideAndPrejudice from "../imgs/PrideAndPrejudice.webp";

const CarouselComponent: React.FC = () => {
  return (
    <Carousel 
    infiniteLoop 
    showThumbs={false} 
    showStatus={false}
    autoPlay 
    interval={5000} 
    transitionTime={500} 
    stopOnHover={true} 
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
        <div className='Slide3Left'>
          <Link to="/Book_Bound/fantasy">
            <img src={ACourtOfThornsAndRoses} alt="A Court of Thorns and Roses - Fantasy novel" />
          </Link>
          <Link to="/Book_Bound/fantasy">
            <img src={KingsOfTheWild} alt="Kings of the Wild - Fantasy novel" />
          </Link>
        </div>
        <div className='Slide3Center'>
          <h1>See what we have to offer</h1>
        </div>
        <div className='Slide3Right'>
          <Link to="/Book_Bound/scifi">
            <img src={ManKind} alt="ManKind - Science fiction novel" />
          </Link>
          <Link to="/Book_Bound/classics">
            <img src={PrideAndPrejudice} alt="Pride and Prejudice - Classic novel" />
          </Link>
        </div>
        
      </div>
    </Carousel>
  );
}

export default CarouselComponent;
