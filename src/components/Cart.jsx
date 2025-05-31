import { IonIcon } from '@ionic/react';
import menu1 from '../assets/images/menu1.jpg';
import menu2 from '../assets/images/menu2.jpg';
import menu3 from '../assets/images/menu3.jpg';
import menu4 from '../assets/images/menu4.jpg';
import menu5 from '../assets/images/menu5.jpg';

const Cart = ({ isActive }) => {
  const cartItems = [
    { id: 1, name: 'Saumon gravlax', price: 9, image: menu1 },
    { id: 2, name: 'Chevrefried with honey', price: 14, image: menu2 },
    { id: 3, name: 'Crispy fish', price: 4, image: menu3 },
    { id: 4, name: 'Stracciatella', price: 11, image: menu4 },
    { id: 5, name: 'Sea bream carpaccio', price: 19, image: menu5 }
  ];

  return (
    <div className={`cart-box ${isActive ? 'active' : ''}`}>
      <ul className="cart-box-ul">
        <h4 className="cart-h4">Your order.</h4>
        
        {cartItems.map(item => (
          <li key={item.id}>
            <a href="#" className="cart-item">
              <div className="img-box">
                <img src={item.image} alt="product" className="product-img" width="50" height="50" loading="lazy" />
              </div>
              <h5 className="product-name">{item.name}</h5>
              <p className="product-price">
                <span className="small">$</span>{item.price}
              </p>
            </a>
          </li>
        ))}
      </ul>

      <div className="cart-btn-group">
        <button className="btn btn-secondary">View order</button>
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;