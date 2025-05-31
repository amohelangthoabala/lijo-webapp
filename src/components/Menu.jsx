// src/components/Menu.jsx
import { Link } from 'react-router-dom';
//import IonIcon from './IonIcon';

const Menu = () => {
  return (
    <section className="product" id="menu">
      {/* ... other code ... */}
      
      <div className="products-grid">
        {/* Changed from <a> to <Link> */}
        <Link to="/product/1">
          <div className="product-card">
            {/* ... product card content ... */}
          </div>
        </Link>
        
        {/* More product cards... */}
      </div>

      <Link to="/full-menu" className="btn btn-primary btn-icon">
        <img src="/assets/images/menu.svg" alt="menu icon" />
        Full menu
      </Link>
    </section>
  );
};

export default Menu;