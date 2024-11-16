import "./App.css";
import Header from "./components/header.component";
import { Footer } from "./components/footer.component";
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
