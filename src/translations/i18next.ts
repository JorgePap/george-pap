// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import language resources
import { enTranslations } from "./en";
import { elTranslations } from "./el";
import { LANGUAGES } from "@domain";

// Function to get the saved language from localStorage
const getSavedLanguage = () => {
  const languageFromStorage = localStorage.getItem("language");

  return languageFromStorage ?? LANGUAGES.EN;
};

i18n.use(initReactI18next).init({
  resources: {
    [LANGUAGES.EN]: enTranslations,
    [LANGUAGES.GR]: elTranslations,
  },
  lng: getSavedLanguage(), // Default language
  fallbackLng: LANGUAGES.EN, // Fallback language if a translation is not available for the current language
  interpolation: {
    escapeValue: false, // By default, react-i18next escapes special characters. Set this to false to avoid double escaping.
  },
});

export default i18n;
