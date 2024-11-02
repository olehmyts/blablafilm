import apiClient from './apiClient';
import { AppLanguage } from '../interfaces/AppLanguage';

export const fetchAppLanguages= async (): Promise<AppLanguage[]> => {
  const response = await apiClient.get<AppLanguage[]>(`/configuration/languages`);
  return response.data.filter(lang => lang.iso_639_1 === 'uk' || lang.iso_639_1 === 'en');
};
