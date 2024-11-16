import apiClient from './apiClient';
import { MoviesList } from '../interfaces/MoviesList';
import { MovieDetail } from '../interfaces/MovieDetail';
import { MoviePictures } from '../interfaces/MoviePictures';

// export const fetchMovieLists = async (category: string, language: string = "en-US", page: number): Promise<MoviesList> => {
//   const response = await apiClient.get<MoviesList, any>(`/movie/${category}?language=${language}&page=${page}`)
//     .catch(function (error) {
//       if (error.response) {
//         console.error('Status', error.response.status);
//         console.error(error.response.data);
//       } else if (error.request) {
//         console.error('Request', error.request);
//       } else {
//         console.error('Error', error.message);
//       }

//     });

//   return response.data;
// };

class MovieEndpoints {

  public fetchMovieLists = async (category: string, language: string, page: number): Promise<MoviesList> => {
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

  public movieDetails = async (id: number, language: string): Promise<MovieDetail> => {
    const { data } = await apiClient.get<MovieDetail>(`/movie/${id}?language=${language}`);
    return data;
  };

  public movieImages = async (id: number): Promise<MoviePictures> => {
    const { data } = await apiClient.get<MoviePictures>(`/movie/${id}/images`);
    return data;
  };

}

export const movieEndpoints = new MovieEndpoints(); 