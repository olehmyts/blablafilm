// import useProducts from "./hooks/useProducts";
import {
  Row,
  Segmented,
  Card,
  Image,
  Select,
  Col,
  Pagination,
  Spin,
} from "antd";
// import useMovieGenres from "./hooks/useMovieGenres";
import useMovieLists from "../hooks/useMovieLists";
import useAppLanguage from "../hooks/useAppLanguage";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Films: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const args = searchParams.get("args");

  const decodedArgs = decodeURIComponent(args!);
  const params = new URLSearchParams(decodedArgs);
  const getCategory = params.get("category");
  const getPage = params.get("page")!;

  if (!localStorage.getItem("lang")) localStorage.setItem("lang", "en");

  const [movieCategory, setMovieCategory] = useState<string>(
    getCategory ? getCategory : "popular"
  );
  const [page, setPage] = useState<number>(getPage ? +getPage : 1);
  const [appLanguage, setAppLanguage] = useState<string>(
    localStorage.getItem("lang")!
  );

  useEffect(() => {
    if (!searchParams.has("args")) {
      const defaultArgs = `category=${movieCategory}%26page=${page}`;
      navigate(`?args=${defaultArgs}`, { replace: true });
    }
  }, [searchParams, navigate, movieCategory, page]);

  // const { movieGenres, loading } = useMovieGenres();
  const { languages } = useAppLanguage();
  const { movies, moviesLoading } = useMovieLists(
    movieCategory,
    appLanguage,
    page
  );

  function setLanguage(lang: string) {
    setAppLanguage(lang);
    localStorage.setItem("lang", lang);
  }

  function onChangeCategory(category: string) {
    setMovieCategory(category);
    setSearchParams();
    setPage(1);
  }
  function onChangePage(page: number) {
    setPage(page);
    setSearchParams();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (moviesLoading)
    return (
      <div style={{ height: 500 }}>
        <Spin tip="Loading" style={{ marginTop: 250 }}>
          Loading...
        </Spin>
      </div>
    );

  return (
    <div>
      <Row style={{ float: "right" }}>
        <Col span={24}>
          <Select
            style={{ width: 120, textAlign: "left" }}
            allowClear
            options={languages.map((item) => ({
              label: item.english_name,
              value: item.iso_639_1,
            }))}
            onChange={setLanguage}
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
            style={{ marginTop: 10 }}
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
            onChange={onChangeCategory}
          />
        </Col>
      </Row>
      {/* <Row
      >
        <Pagination
          current={page}
          hideOnSinglePage
          total={movies!.total_results > 10000 ? 10000 : movies?.total_results}
          onChange={onChangePage}
          defaultPageSize={20}
          showSizeChanger={false}
        />
      </Row> */}
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        {movies?.results.map((movie) => (
          <a href={`films/${movie.id}`}>
            <Card
              key={movie.id}
              type="inner"
              style={{ width: 270, margin: 10 }}
            >
              <Image
                preview={false}
                src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
                alt={movie.title}
              />
              {movie.title}
            </Card>
          </a>
        ))}
      </Row>
      <Pagination
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        current={page}
        hideOnSinglePage
        total={movies!.total_results > 10000 ? 10000 : movies?.total_results}
        onChange={onChangePage}
        defaultPageSize={20}
        showSizeChanger={false}
      />
    </div>
  );
};

export default Films;
