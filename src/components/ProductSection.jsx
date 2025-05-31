import { useProducts } from '../hooks/useProducts';
import ProductCard from './ProductCard';

const ProductSection = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <section className="product" id="menu">
      <h2 className="section-title">Popular Dishes</h2>
      <p className="section-text">Freshly made meals delivered to you</p>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={
              product.variants.length > 0
                ? product.variants[0].price
                : product.base_price
            }
            image={product.images[0]}
            badge={product.variants.length > 0 ? 'Popular' : 'Classic'} // Example logic
            // rating="4.5" // You can replace this when your API supports ratings
            // reviews="120" // Same for reviews
          />
        ))}
      </div>

      <button className="btn btn-primary">View All Dishes</button>
    </section>
  );
};

export default ProductSection;
