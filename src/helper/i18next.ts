import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from '../locale/tr.json';
import en from '../locale/en.json';

export const resources = {
  en: { translation: en },
  tr: { translation: tr },
};
i18next.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  lng: 'en',
  fallbackLng: 'en',
  resources: resources,
});

export default i18next;
