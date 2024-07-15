import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-info">
          <h2>Book Bound</h2>
          <address>
            <p>123 Book Street, Bookphile City, 45678</p>
            <p>Email: <a className="normal-link" href="mailto:contact@BookBound.com">contact@BookBound.com</a></p>
            <p>Phone: <a className="normal-link" href="tel:+1234567890">(123) 456-7890</a></p>
          </address>
        </div>
        <div className="company-description">
          <h3>About Us</h3>
          <p>We are dedicated to offering a wide range of books across all genres. Visit us for the best literary collections and exclusive book signings.</p>
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
    </footer>
  );
};

export default Footer;
