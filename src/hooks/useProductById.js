import { useEffect, useState } from 'react';
import { getProductById } from '../services/productservice';

export const useProductById = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    getProductById(id)
      .then((data) => {
        setProduct(data.data); // Unwrap the "data" field
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  return { product, loading, error };
};