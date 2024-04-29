import { useTranslation } from '@/shared/i18n/client';
import { useLangContext } from '../providers';

export const useClientTranslation = (filePath = '') => {
  const currentLanguage = useLangContext() as string;

  return useTranslation(currentLanguage, filePath);
};
