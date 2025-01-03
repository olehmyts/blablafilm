import "./App.css";
import Header from "./components/header.component";
import { Footer } from "./components/footer.component";
import BaseRouter from "./router/base.router";
import { LanguageProvider } from "./store/changeLanguage.context";
import '../src/support/i18n/i18n';

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
