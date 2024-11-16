import { useEffect, useState } from 'react';
import { movieEndpoints } from '../api/movieListsEndpoints';
import { MoviePictures } from '../interfaces/MoviePictures';

const useMovieDetailPictures = (id: number, language: string) => {
  const [movieDetailImages, setMovieDetailImages] = useState<MoviePictures>();
  const [movieDetailsImagesLoading, setMovieDetailsImagesLoading] = useState(true);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await movieEndpoints.movieImages(id);
        setMovieDetailImages(data);
      } catch (error) {
        console.error('Failed to load Images:', error);
      } finally {
        setMovieDetailsImagesLoading(false);
      }
    };

    loadGenres();
  }, [id, language]);

  return { movieDetailImages, movieDetailsImagesLoading };
};

export default useMovieDetailPictures;