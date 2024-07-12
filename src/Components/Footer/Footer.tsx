
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="company-info">
          <h2>Bookstore Name</h2>
          <p>123 Book Street, Bibliophile City, 45678</p>
          <p>Email: contact@bookstore.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="company-description">
          <h3>About Us</h3>
          <p>We are a dedicated bookstore offering a wide range of books across all genres. Visit us for the best literary collections and exclusive book signings.</p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Book Bound. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
