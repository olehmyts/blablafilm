import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Films from "../pages/films";

import { routes } from "./routes";

const BaseRouter = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.films} element={<Films />} />
      <Route path={routes.about} element={<About />} />
    </Routes>
  );
};

export default BaseRouter;
