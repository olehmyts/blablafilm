import { Routes, Route } from "react-router-dom";
import Home from "../pages/home.page";
import About from "../pages/about.page";
import Films from "../pages/films.page";

import { routes } from "./routes";
import MovieDetail from "../pages/movieDetail.page";

const BaseRouter = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.films} element={<Films />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.movieDetail} element={<MovieDetail />} />
    </Routes>
  );
};

export default BaseRouter;
