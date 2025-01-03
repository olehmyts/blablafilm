import "./App.css";
import Header from "./components/header.component";
import { Footer } from "./components/footer.component";
import BaseRouter from "./router/base.router";
import { LanguageProvider } from "./store/changeLanguage.context";
import "../src/support/i18n/i18n";
import React from "react";
import { ThemeProvider } from "./store/theme.context";

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <LanguageProvider>
          <Header />
          <div className="content">
            <BaseRouter />
          </div>
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
