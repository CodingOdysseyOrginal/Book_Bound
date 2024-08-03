import { Link } from "react-router-dom";
import CrackCode from "../../../imgs/CrackTheInterview.webp";
import "./Slide1.css";

const Slide1 = () => {
  return (
    <div className="HomePageSlide1">
      <Link to={`/product/1`}>
        <figure>
          <img src={CrackCode} alt="Crack the Interview" />
        </figure>
      </Link>
      <div className="Slide1Info">
        <h1>Cracking the Coding Interview</h1>
        <p>How to crack the coding quiz!</p>
        <Link to={`/product/1`}>
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Slide1;
