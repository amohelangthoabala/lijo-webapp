import { useEffect, useState } from 'react';
import { getRestaurants } from '../services/restaurantService';

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRestaurants()
      .then((data) => setRestaurants(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { restaurants, loading, error };
};
