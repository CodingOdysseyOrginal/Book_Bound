import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

import Slide1 from "./Slides/Slide1/Slide1";
import Slide2 from "./Slides/Slide2/Slide2";


const CarouselComponent: React.FC = () => {
  return (
    <Carousel
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={5000}
      transitionTime={500}
      stopOnHover={false}
    
    >
      <Slide1 />
      <Slide2 />
    </Carousel>
  );
};

export default CarouselComponent;
