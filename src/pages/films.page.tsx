import {
  Row,
  Segmented,
  Card,
  Image,
  Col,
  Pagination,
  Spin,
} from "antd";
// import useMovieGenres from "./hooks/useMovieGenres";
import useMovieLists from "../hooks/useMovieLists";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useLanguage } from "../store/changeLanguage.context";

const Films: React.FC = () => {
  const applicationLanguage = useLanguage();

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const args = searchParams.get("args");

  const decodedArgs = decodeURIComponent(args!);
  const params = new URLSearchParams(decodedArgs);
  const getCategory = params.get("category");
  const getPage = params.get("page")!;

  const [movieCategory, setMovieCategory] = useState<string>(
    getCategory ? getCategory : "popular"
  );
  const [page, setPage] = useState<number>(getPage ? +getPage : 1);

  useEffect(() => {
    if (!searchParams.has("args")) {
      const defaultArgs = `category=${movieCategory}%26page=${page}`;
      navigate(`?args=${defaultArgs}`, { replace: true });
    }
  }, [searchParams, navigate, movieCategory, page]);

  // const { movieGenres, loading } = useMovieGenres();
  const { movies, moviesLoading } = useMovieLists(
    movieCategory,
    applicationLanguage.language,
    page
  );

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
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {movies?.results.map((movie) => (
          <Link to={`${movie.id}`} key={movie.id}>
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
          </Link>
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
