import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">Blogr</div>
        <div className="navbar-links">
          <a href="#">Product</a>
          <a href="#">Company</a>
          <a href="#">Connect</a>
        </div>
        <div className="navbar-auth">
          <a href="#">Login</a>
          <a href="#" className="sign-up">Sign Up</a>
        </div>
      </nav>
      <h1 className="header-title">A modern publishing platform</h1>
      <p className="header-subtitle">Grow your audience and build your online brand</p>
      <div className="header-buttons">
        <button>Start for Free</button>
        <button>Learn More</button>
      </div>
    </header>
  );
};

export default Header;
