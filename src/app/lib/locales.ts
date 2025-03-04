import en from '../locales/en/common.json';
import ko from '../locales/ko/common.json';

type Translations = {
  categories: Record<string, string>;
};

const translations: Record<string, Translations> = {
  en,
  ko,
};

export const getTranslations = (language: string): Translations => {
  return translations[language] || translations['en']; // Fallback to English
};