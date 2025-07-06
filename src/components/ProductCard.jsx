import { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const ProductCard = ({ id, name, description, image, price, badge, rating = '4.5', reviews = 0, restaurant_id, onAddToCart, onCardClick }) => {
  const [open, setOpen] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click navigation
    onAddToCart?.({
      id,
      name,
      image,
      price,
      quantity: 1,
      restaurant_id,
    });

    setOpen(true);

    const sound = new Audio('sounds/add-to-cart.mp3');
    sound.play();
  };

  return (
    <div className="product-card" onClick={() => onCardClick?.(id)} style={{ cursor: 'pointer' }}>
      <div className="img-box">
        <img src={image} alt={name} className="product-img" />
        {badge && (
          <div className="card-badge green">
            <ion-icon name="star"></ion-icon>
            <span>{badge}</span>
          </div>
        )}
      </div>

      <div className="wrapper">
        <h3 className="product-name">{name}</h3>
        <div className="product-price">
          <span>{price}</span>
          <span className="small">LSL</span>
        </div>
      </div>

      <p className="product-text">
        {description && description.length > 85 ? description.slice(0, 85) + '...' : description || ''}
      </p>

      <button
        className="btn btn-primary"
        style={{ marginTop: '1rem', width: '100%' }}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
          Added to Cart!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ProductCard;