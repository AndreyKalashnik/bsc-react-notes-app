import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en";
import cz from "./translations/cz";

const resources = {
  en: { translation: en },
  cz: { translation: cz }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
