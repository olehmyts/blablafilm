import { useEffect, useState } from 'react';
import { fetchAppLanguages } from '../api/languagesEndpoint';
import { AppLanguage } from '../interfaces/AppLanguage';

const useAppLanguage = () => {
  const [languages, setAppLanguage] = useState<AppLanguage[]>([]);
  const [languagesLoading, setLanguagesLoading] = useState(true);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await fetchAppLanguages();
        setAppLanguage(data);
      } catch (error) {
        console.error('Failed to load languages:', error);
      } finally {
        setLanguagesLoading(false);
      }
    };

    loadGenres();
  }, []);

  return { languages, languagesLoading };
};

export default useAppLanguage;
