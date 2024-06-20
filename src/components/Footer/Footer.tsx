import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div>
          <h4>Product</h4>
          <a href="#">Overview</a>
          <a href="#">Pricing</a>
          <a href="#">Marketplace</a>
          <a href="#">Features</a>
          <a href="#">Integrations</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Team</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>
        <div>
          <h4>Connect</h4>
          <a href="#">Contact</a>
          <a href="#">Newsletter</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <p>&copy; 2024 Blogr</p>
    </footer>
  );
};

export default Footer;
