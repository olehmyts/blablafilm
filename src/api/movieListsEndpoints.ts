import apiClient from './apiClient';
import { MoviesList } from '../interfaces/MoviesList';

export const fetchMovieLists = async (category: string, language: string = "en-US", page: number): Promise<MoviesList> => {
  const response = await apiClient.get<MoviesList, any>(`/movie/${category}?language=${language}&page=${page}`)
    .catch(function (error) {
      if (error.response) {
        console.error('Status', error.response.status);
        console.error(error.response.data);
      } else if (error.request) {
        console.error('Request', error.request);
      } else {
        console.error('Error', error.message);
      }

    });

  return response.data;
};
