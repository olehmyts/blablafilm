import "./App.css";
import { LanguageProvider } from "./store/changeLanguage.context";
import "../src/support/i18n/i18n";
import React from "react";
import { ThemeProvider } from "./store/theme.context";
import Content from "./components/content/content.component";

const App: React.FC = () => {

  return (
    <div className="App">
      <ThemeProvider>
        <LanguageProvider>
         <Content/>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
