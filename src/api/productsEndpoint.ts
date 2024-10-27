import apiClient from './apiClient';
import { Product } from '../interfaces/Product';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await apiClient.get<Product[]>('/products');
  return response.data;
};

