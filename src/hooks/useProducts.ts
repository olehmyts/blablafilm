// hooks/useUsers.ts
import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productsEndpoint';
import { Product } from '../interfaces/Product';

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, loading };
};

export default useProducts;
