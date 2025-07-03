import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Header = () => {
  const navigate = useNavigate();
  const [isNavActive, setIsNavActive] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);
  const { cart, removeFromCart } = useCart();
  const { user, logout } = useAuth();

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
      {/* Cart Panel */}
      {isCartActive && (
        <div className={`cart-box ${isCartActive ? 'active' : ''}`}>
          <ul className="cart-box-ul">
            <h4 className="cart-h4">Your Cart</h4>

            {cart?.length > 0 ? (
              cart.map((item, index) => (
                <li className="cart-item" key={index}>
                  <div className="img-box">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="product-img"
                    />
                  </div>
                  <h5 className="product-name">{item.name}</h5>
                  <div className="product-price">
                    {item.price}
                    <span className="small"> x {item.quantity}</span>
                  </div>
                  {/* Optional remove button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: 'none',
                      color: 'red',
                      fontSize: '14px',
                      marginLeft: '10px',
                    }}
                  >
                    ✕
                  </button>
                </li>
              ))
            ) : (
              <p style={{ padding: '1rem' }}>Your cart is empty.</p>
            )}
          </ul>

          <div className="cart-btn-group">
            <button className="btn btn-secondary" onClick={cartToggleFunc}>
              Close
            </button>
            <button className="btn btn-primary" disabled={cart.length === 0} onClick={() => navigate('/checkout')}>
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-wrapper">
          <Link to="/">
            <img src="/assets/images/logo.svg" alt="logo" width="130" />
          </Link>

          <ul className={`navbar-nav ${isNavActive ? 'active' : ''}`}>
            <li>
              <Link to="/" className="nav-link" onClick={navToggleFunc}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={navToggleFunc}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-link" onClick={navToggleFunc}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/menu" className="nav-link" onClick={navToggleFunc}>
                Our Menu
              </Link>
            </li>
            <li>
              <Link to="/orders" className="nav-link" onClick={navToggleFunc}>
                Orders
              </Link>
            </li>
            {user ? (
                <>
                  <li><span className="nav-link">Hi, {user.name.split(' ')[0]}</span></li>
                  <li>
                    <button className="nav-link" onClick={() => { logout(); navToggleFunc(); }}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login" className="nav-link" onClick={navToggleFunc}>
                    Login
                  </Link>
                </li>
              )}
            </ul>

          <div className="navbar-btn-group">
            <button className="shopping-cart-btn" onClick={cartToggleFunc}>
              <img src="/assets/images/cart.svg" alt="cart" width="18" />
              <span className="count"> {cart.reduce((total, item) => total + item.quantity, 0)}</span>
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
