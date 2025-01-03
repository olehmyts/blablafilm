import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resources";

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") ?? "en", // if you're using a language detector, do not define the lng option
  fallbackLng: "en",
  debug: false,
  interpolation: {
  escapeValue: false,
},
});
export default i18n;