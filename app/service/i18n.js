
import i18n from 'i18next';
import az from '../assets/locales/az/translation.json'
import en from '../assets/locales/en/translation.json'
import ru from '../assets/locales/ru/translation.json'

i18n.init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      'en': {
        translation: en
      },
      'az': {
        translation: az
      },
      'ru': {
        translation: ru
      },
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;

// import i18n from "i18next";
// import Backend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";
// const resources = {
//   en: {
//     translation: translationEN
//   },
//   de: {
//     translation: translationDE
//   }
// };

// i18n
//   .use(Backend)

//   .use(LanguageDetector)

//   .use(initReactI18next)

//   .init({
//     resources,
//     fallbackLng: "en",
//     debug: true,
//     lng: "en",
//     interpolation: {
//       escapeValue: false // not needed for react as it escapes by default
//     }
//   });