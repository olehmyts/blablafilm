import "./App.css";
// import useProducts from "./hooks/useProducts";
import { Row, Segmented, Card, Image, Select, Col, Pagination } from "antd";
// import useMovieGenres from "./hooks/useMovieGenres";
import useMovieLists from "./hooks/useMovieLists";
import useAppLanguage from "./hooks/useAppLanguage";
import { useState } from "react";

function App() {
  const [movieCategory, setMovieCategory] = useState<string>("popular");
  const [page, setPage] = useState<number>(1);
  const [appLanguage, setAppLanguage] = useState<string>("uk");
  // const { movieGenres, loading } = useMovieGenres();
  const { languages } = useAppLanguage();
  const { movies, moviesLoading } = useMovieLists(
    movieCategory,
    appLanguage,
    page
  );

  function changeCategoryAndSetToFirstPage(category: string) {
    setMovieCategory(category);
    setPage(1);
  }

  if (moviesLoading) return <p>Loading...</p>;

  return (
    <div className="App">
      <h1>Hello from bla bla film!!! </h1>
      <Row style={{ float: "right" }}>
        <Col span={24}>
          <Select
            style={{ width: 120, textAlign: "left" }}
            allowClear
            options={languages.map((item) => ({
              label: item.english_name,
              value: item.iso_639_1,
            }))}
            onChange={setAppLanguage}
            defaultValue={appLanguage}
          />
        </Col>
      </Row>
      <Row>
        {/* <Select
          style={{ width: 200, textAlign: "left" }}
          allowClear
          options={movieGenres.map((item) => ({
            value: item.id,
            label: item.name,
          }))}
        /> */}
        <Col span={24}>
          <Segmented
            options={[
              {
                label: "Now Playing",
                value: "now_playing",
              },
              {
                label: "Popular",
                value: "popular",
              },
              {
                label: "TopRated",
                value: "top_rated",
              },
              {
                label: "Upcoming",
                value: "upcoming",
              },
            ]}
            value={movieCategory}
            onChange={changeCategoryAndSetToFirstPage}
          />
        </Col>
      </Row>
      <Row style={{ alignItems: "center" }}>
        <Pagination
          current={page}
          hideOnSinglePage
          total={movies!.total_results > 10000 ? 10000 : movies?.total_results}
          onChange={setPage}
          defaultPageSize={20}
          showSizeChanger={false}
        />
      </Row>
      {/* if (moviesLoading) return <p>Loading...</p>; */}
      <Row>
        {movies?.results.map((movie) => (
          <Card
            key={movie.id}
            type="inner"
            title={`${movie.title}`}
            style={{ width: 300, margin: 10 }}
          >
            <Image
              src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
              alt={movie.title}
            />
            <p>{movie.overview}</p>
          </Card>
        ))}
      </Row>
        <Pagination
          current={page}
          hideOnSinglePage
          total={movies!.total_results > 10000 ? 10000 : movies?.total_results}
          onChange={setPage}
          defaultPageSize={20}
          showSizeChanger={false}
        />
    </div>
  );
}

export default App;
