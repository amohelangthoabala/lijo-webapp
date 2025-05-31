import { useEffect, useState } from 'react';
import { getProducts } from '../services/productservice';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data.data);
        setMeta(data.meta);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { products, meta, loading, error };
};
