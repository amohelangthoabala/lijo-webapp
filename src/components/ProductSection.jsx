import { useProducts } from '../hooks/useProducts';
import { useCart } from '../CartContext';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

const ProductSection = () => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <section className="product" id="menu">
      <h2 className="section-title">Popular Dishes</h2>
      <p className="section-text">Freshly made meals delivered to you</p>

      <div className="products-grid">
        {products.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.base_price}
            image={product.images?.[0] || ''}
            badge={product.restaurant.name}
            restaurant_id={product.restaurant.id}
            onAddToCart={(productData) => addToCart(productData)}
            onCardClick={() => navigate(`/products/${product.id}`)}
          />
        ))}
      </div>

      <button
        className="btn btn-primary"
        onClick={() => navigate('/dishes')}
      >
        View All Dishes
      </button>
    </section>
  );
};

export default ProductSection;