// hooks/useUsers.ts
import { useEffect, useState } from 'react';
import { fetchMovieGenres } from '../api/genresEndpoints';
import { Genre } from '../interfaces/Genre';

const useMovieGenres = () => {
  const [movieGenres, setMovieGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await fetchMovieGenres();
        setMovieGenres(data);
      } catch (error) {
        console.error('Failed to load genres:', error);
      } finally {
        setLoading(false);
      }
    };

    loadGenres();
  }, []);

  return { movieGenres, loading };
};

export default useMovieGenres;
