import apiClient from './apiClient';
import { MoviesList } from '../interfaces/MoviesList';

export const fetchMovieLists= async (category: string, language:string = "en-US", page:number = 1): Promise<MoviesList> => {
  const response = await apiClient.get<MoviesList>(`/movie/${category}?language=${language}&page=${page}`);
  return response.data;
};
