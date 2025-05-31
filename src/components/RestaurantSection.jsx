import { useRestaurants } from '../hooks/useRestaurants';
import RestaurantCard from './RestaurantCard';

const RestaurantSection = () => {
  const { restaurants, loading, error } = useRestaurants();

  if (loading) return <p>Loading restaurants...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <section className="services" id="restaurants">
      <p className="section-title">Available Restaurants</p>

      <div className="products-grid">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </section>
  );
};

export default RestaurantSection;
