import dashboard from "./data/dataEn/dashboard.json";
import dashboardRu from "./data/dataRu/dashboard.json";

import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const resources = {
  en: {
    dashboard,
  },
  ru: {
    dashboard: dashboardRu,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "ru",
  keySeparator: ".",
  ns: ["dashboard"],
});

export default i18n;
