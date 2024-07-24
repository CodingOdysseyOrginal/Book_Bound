import { Link } from "react-router-dom";
import ACourtOfThornsAndRoses from "../../../imgs/ACourtOfThornsAndRoses.jpg";
import KingsOfTheWild from "../../../imgs/KingsOfTheWyld.jpg";
import ManKind from "../../../imgs/ManKind.jpg";
import PrideAndPrejudice from "../../../imgs/PrideAndPrejudice.webp";
import "./Slide3.css";

const Slide3 = () => {
  return (
    <div className="HomePageSlide3">
     <div className="Slide3Center">
        <h1>See what we have to offer</h1>
      </div>
      <div className="Slide3Left">
        <Link to="/Book_Bound/fantasy">
          <img
            src={ACourtOfThornsAndRoses}
            alt="A Court of Thorns and Roses - Fantasy novel"
          />
        </Link>
        <Link to="/Book_Bound/fantasy">
          <img src={KingsOfTheWild} alt="Kings of the Wild - Fantasy novel" />
        </Link>
      </div>
     
      <div className="Slide3Right">
        <Link to="/Book_Bound/scifi">
          <img src={ManKind} alt="ManKind - Science fiction novel" />
        </Link>
        <Link to="/Book_Bound/classics">
          <img
            src={PrideAndPrejudice}
            alt="Pride and Prejudice - Classic novel"
          />
        </Link>
      </div>
    </div>
  );
};

export default Slide3;
