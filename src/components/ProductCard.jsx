const ProductCard = ({ id, name, image, price, badge, rating = '4.5', reviews = 0, onAddToCart }) => {
  return (
    <div className="product-card">
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
        A delightful combination of fresh ingredients and spices.
      </p>

      <div className="product-rating">
        <span>⭐ {rating}</span>
        <span className="small">({reviews} reviews)</span>
      </div>

      <button
        className="btn btn-primary"
        style={{ marginTop: '1rem', width: '100%' }}
        onClick={() =>
          onAddToCart?.({
            id,
            name,
            image,
            price,
            quantity: 1,
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
