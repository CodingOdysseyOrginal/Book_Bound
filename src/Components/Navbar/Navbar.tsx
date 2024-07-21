import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../ProgessBar/ProgressBar";
import Logo from "./img/Logo.svg";
import cart from "./img/Cart.svg";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    if (!menuActive) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820 && menuActive) {
        setMenuActive(false);
        document.body.classList.remove("sidebar-open");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuActive]);

  return (
    <>
      <ProgressBar />
      <nav>
        <div
          className={`menu-icon ${menuActive ? "active move" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
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

        <div className="color-spot-1"></div>
        <div className="color-spot-2"></div>
        <div className="color-spot-3"></div>
      </nav>
      <Sidebar isOpen={menuActive} toggleSidebar={toggleMenu} />
    </>
  );
};

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul className="sidebar-links">
        <li>
          <Link to="/Book_Bound/fiction" onClick={toggleSidebar}>
            Fiction
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <li>
          <Link to="/Book_Bound/nonfiction" onClick={toggleSidebar}>
            Non-Fiction
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <li>
          <Link to="/Book_Bound/bestsellers" onClick={toggleSidebar}>
            Best Sellers
          </Link>
        </li>
        <hr className="sidebar-divider" />

        <li>
          <Link to="/Book_Bound/giftcards" onClick={toggleSidebar}>
            Gift Cards
          </Link>
        </li>
        <hr className="sidebar-divider" />

        <li>
          <Link
            to="/Book_Bound/cart"
            className="cart-icon"
            onClick={toggleSidebar}
          >
            <img src={cart} alt="Cart" />
          </Link>
        </li>
      </ul>
       
    </div>
  );
};

export default Navbar;
