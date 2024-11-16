import { useEffect, useState } from 'react';
import { movieEndpoints } from '../api/movieListsEndpoints';
import { MoviesList } from '../interfaces/MoviesList';

const useMovieLists = (category: string, language: string, currentPage: number) => {
  const [movies, setMoviesList] = useState<MoviesList>();
  const [moviesLoading, setMoviesLoading] = useState(true);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await movieEndpoints.fetchMovieLists(category, language, currentPage );
        setMoviesList(data);
      } catch (error) {
        console.error('Failed to load Movies:', error);
      } finally {
        setMoviesLoading(false);
      }
    };

    loadGenres();
  }, [category, language, currentPage]);

  return { movies, moviesLoading, currentPage };
};

export default useMovieLists;