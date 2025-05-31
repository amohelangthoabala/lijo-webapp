import { Link } from 'react-router-dom';

const RestaurantCard = ({ name, logo_url, isTop }) => {
  return (
    <div className="product-card">
      <div className="img-box">
        <img src={logo_url} alt={name} className="product-img" />
        {isTop && (
          <div className="card-badge green">
            <ion-icon name="star"></ion-icon>
            <span>Top Rated</span>
          </div>
        )}
      </div>

      <div className="wrapper">
        <h3 className="product-name">{name}</h3>
        <Link to={`/restaurant/${name.toLowerCase().replace(/\s+/g, '-')}`}>
          <div className="product-price">
            <span>View</span>
            <span className="small">Menu</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;
    