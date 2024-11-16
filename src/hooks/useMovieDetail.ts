import { useEffect, useState } from 'react';
import { movieEndpoints } from '../api/movieListsEndpoints';
import { MovieDetail } from '../interfaces/MovieDetail';

const useMovieDetail = (id: number, language: string) => {
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();
  const [movieDetailsLoading, setMovieDetailsLoading] = useState(true);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await movieEndpoints.movieDetails(id, language );
        setMovieDetail(data);
      } catch (error) {
        console.error('Failed to load Details:', error);
      } finally {
        setMovieDetailsLoading(false);
      }
    };

    loadGenres();
  }, [id, language]);

  return { movieDetail, movieDetailsLoading };
};

export default useMovieDetail;
