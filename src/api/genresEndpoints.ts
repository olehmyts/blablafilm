import { Genre } from '../interfaces/Genre';
import apiClient from './apiClient';

export const fetchMovieGenres = async (): Promise<Genre[]> => {
  const response = await apiClient.get('/genre/movie/list?language=en');
  return response.data.genres;
};

