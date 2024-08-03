import { Link } from "react-router-dom";
import Dune from "../../../imgs/Dune.webp";
import WillSaveTheGalaxyForCash from "../../../imgs/WillDestoryTheGalaxyForCash.jpg";
import "./Slide2.css";

const Slide2 = () => {
  return (
    <div className="HomePageSlide2">
      <Link to={`/product/2`} className="Slide2Image">
        <img src={Dune} alt="Dune" />
      </Link>
      <div className="Slide2Info">
        <h1>Explore the world of Fiction</h1>
        <Link to="/Book_Bound/fiction">
          <button>Explore Now</button>
        </Link>
      </div>
      <Link to={`/product/3`} className="Slide2Image">
        <img
          src={WillSaveTheGalaxyForCash}
          alt="Will Save the Galaxy for Cash"
        />
      </Link>
    </div>
  );
};

export default Slide2;
