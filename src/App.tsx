import "./App.css";
import Header from "./components/header.component";
import { Footer } from "./components/footer.component";
import BaseRouter from "./router/base.router";
import { LanguageProvider } from "./store/changeLanguage.context";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Home:"Home",
        Films:"Films",
        About:"About",
        "Now Playing": "Now Playing",
        Popular: "Popular",
        TopRated: "TopRated",
        Upcoming: "Upcoming",
      },
    },
    uk: {
      translation: {
        Home:"Головна",
        Films:"Фільми",
        About:"Про нас",
        "Now Playing": "Зараз відтворюється",
        Popular: "Популярні",
        TopRated: "Топ-рейтинг",
        Upcoming: "Незабаром",
      },
    },
  },
  lng: localStorage.getItem("lang") ?? "en", // if you're using a language detector, do not define the lng option
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

const App: React.FC = () => {
  return (
    <div className="App">
      <LanguageProvider>
        <Header />
        <div className="content">
          <BaseRouter />
        </div>
        <Footer />
      </LanguageProvider>
    </div>
  );
};

export default App;
