import "./App.css";
import Header from "./pages/header";
import { Footer } from "./pages/footer";
import BaseRouter from "./router/base.router";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      <BaseRouter></BaseRouter>
      <Footer></Footer>
    </div>
  );
};

export default App;
