import { useEffect, useState } from 'react';
import { fetchMovieLists } from '../api/movieListsEndpoints';
import { MoviesList } from '../interfaces/MoviesList';

const useMovieLists = (category: string, language: string) => {
  const [movies, setMoviesList] = useState<MoviesList>();
  const [moviesLoading, setMoviesLoading] = useState(true);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await fetchMovieLists(category, language);
        setMoviesList(data);
      } catch (error) {
        console.error('Failed to load Movies:', error);
      } finally {
        setMoviesLoading(false);
      }
    };

    loadGenres();
  }, [category, language]);

  return { movies, moviesLoading };
};

export default useMovieLists;