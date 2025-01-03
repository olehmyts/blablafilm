import * as english from './locales/en.json';
import * as ukrainian from './locales/uk.json';

const allTranslationsEN = {
  ...english
};
const allTranslationsUK = {
  ...ukrainian
};

const resources = {
  en: {
    translation: allTranslationsEN
  },
  uk: {
    translation: allTranslationsUK
  }
} as const;

export default resources;