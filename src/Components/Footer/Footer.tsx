import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="company-info">
          <h2>Book Bound</h2>
          <address>
            <p>123 Book Street, Bookphile City, 45678</p>
            <p>Email: <a className="normal-link" href="mailto:contact@BookBound.com">contact@BookBound.com</a></p>
            <p>Phone: <a className="normal-link" href="tel:+1234567890">(123) 456-7890</a></p>
          </address>
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
      <div className="color-spot-1"></div>
      <div className="color-spot-2"></div>
      <div className="color-spot-3"></div>
    </footer>
  );
};

export default Footer;
