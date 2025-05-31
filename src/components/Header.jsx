// src/components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);

  const navToggleFunc = () => {
    setIsNavActive(!isNavActive);
    if (isCartActive) cartToggleFunc();
  };

  const cartToggleFunc = () => {
    setIsCartActive(!isCartActive);
    if (isNavActive) navToggleFunc();
  };

  return (
   <header>
  {/* 👇 Cart panel (positioned independently) */}
  {isCartActive && (
    <div className={`cart-box ${isCartActive ? 'active' : ''}`}>
      <ul className="cart-box-ul">
        <h4 className="cart-h4">Your Cart</h4>

        {/* Sample item */}
        <li className="cart-item">
          <div className="img-box">
            <img
              src="/assets/images/food1.png"
              alt="food"
              className="product-img"
            />
          </div>
          <h5 className="product-name">Grilled Chicken</h5>
          <div className="product-price">
            R79.99 <span className="small">each</span>
          </div>
        </li>
      </ul>

      <div className="cart-btn-group">
        <button className="btn btn-secondary" onClick={cartToggleFunc}>
          Close
        </button>
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  )}

  {/* 👇 Navbar */}
  <nav className="navbar">
    <div className="navbar-wrapper">
      <Link to="/">
        <img src="/assets/images/logo.svg" alt="logo" width="130" />
      </Link>

      <ul className={`navbar-nav ${isNavActive ? 'active' : ''}`}>
        <li><Link to="/" className="nav-link" onClick={navToggleFunc}>Home</Link></li>
        <li><Link to="/about" className="nav-link" onClick={navToggleFunc}>About</Link></li>
        <li><Link to="/services" className="nav-link" onClick={navToggleFunc}>Services</Link></li>
        <li><Link to="/menu" className="nav-link" onClick={navToggleFunc}>Our Menu</Link></li>
        <li><Link to="/testimonials" className="nav-link" onClick={navToggleFunc}>Testimonials</Link></li>
      </ul>

      <div className="navbar-btn-group">
        <button className="shopping-cart-btn" onClick={cartToggleFunc}>
          <img src="/assets/images/cart.svg" alt="cart" width="18" />
          <span className="count">5</span>
        </button>

        <button className="menu-toggle-btn" onClick={navToggleFunc}>
          <span className={`line one ${isNavActive ? 'active' : ''}`}></span>
          <span className={`line two ${isNavActive ? 'active' : ''}`}></span>
          <span className={`line three ${isNavActive ? 'active' : ''}`}></span>
        </button>
      </div>
    </div>
  </nav>
</header>

  );
};

export default Header;