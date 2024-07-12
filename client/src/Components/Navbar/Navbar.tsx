import Logo from "./img/LogoWhite.svg";
import cart from "./img/WhiteCart.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <Link to="/" className="brand-name">
          Book Bound
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/fiction">Fiction</Link>
        </li>
        <li>
          <Link to="/nonfiction">Non-Fiction</Link>
        </li>
        <li>
          <Link to="/bestsellers">Best Sellers</Link>
        </li>
        <li>
          <Link to="/giftcards">Gift Cards</Link>
        </li>
        <li>
          <Link to="/cart" className="cart-icon">
            <img src={cart} alt="Cart" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
