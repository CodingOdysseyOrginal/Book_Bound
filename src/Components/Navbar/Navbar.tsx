import Logo from "./img/Logo.svg";
import cart from "./img/Cart.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ProgressBar from "../ProgessBar/ProgressBar";

const Navbar: React.FC = () => {
  return (
    <>
      <ProgressBar />
      <nav>
        <div className="logo-container">
          <Link to="/Book_Bound/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
          <Link to="/Book_Bound/" className="brand-name">
            <strong>Book Bound</strong>
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/Book_Bound/fiction">Fiction</Link>
          </li>
          <li>
            <Link to="/Book_Bound/nonfiction">Non-Fiction</Link>
          </li>
          <li>
            <Link to="/Book_Bound/bestsellers">Best Sellers</Link>
          </li>
          <li>
            <Link to="/Book_Bound/giftcards">Gift Cards</Link>
          </li>
          <li>
            <Link to="/Book_Bound/cart" className="cart-icon">
              <img src={cart} alt="Cart" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
