// Slide3.js
import "./Slide3.css";
import Yellowface from "../../../imgs/Yellowface.webp";
import Metro2033 from "../../../imgs/Metro2033.jpg";
import ThePictureOfDorianGray from "../../../imgs/ThePictureOfDorianGray.jpg";
import Neuromancer from "../../../imgs/Neuromancer.jpg";

const Slide3 = () => {
  return (
    <div className="carousel">
      <div className="Slide3Container">
        <div className="Slide3Text">
          <h1>Look at some of our best sellers</h1>
          <button>Explore now </button>
        </div>
        <div className="Slide3ImgContainer">
          <img src={Yellowface} alt="Yellowface" />
          <img src={Metro2033} alt="Metro 2033" />
          <img src={ThePictureOfDorianGray} alt="The Picture Of Dorian Gray" />
          <img src={Neuromancer} alt="Neuromancer" />
        </div>
      </div>
    </div>
  );
};

export default Slide3;
