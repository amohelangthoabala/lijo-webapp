import { useProducts } from '../hooks/useProducts';
import { useCart } from '../CartContext';
import ProductCard from './ProductCard';

const Dish = () => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  if (loading) return <p>Loading dishes...</p>;
  if (error) return <p>Error loading dishes: {error.message}</p>;

  return (
    <section className="product" id="dishes">
      <h2 className="section-title">All Dishes</h2>
      <p className="section-text">Explore our full range of freshly made meals</p>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.base_price}
            image={product.images[0]}
            badge={product.restaurant.name}
            restaurant_id={product.restaurant.id}
            onAddToCart={(productData) => addToCart(productData)}
          />
        ))}
      </div>
    </section>
  );
};

export default Dish;