import { Image, Row, Col, Tag } from "antd";

import { useParams } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import useMovieDetailPictures from "../hooks/useMovieDetailPictures";
import { useLanguage } from "../store/changeLanguage.context";

const MovieDetail: React.FC = () => {
  const applicationLanguage = useLanguage();

  const { id } = useParams();

  const { movieDetail, movieDetailsLoading } = useMovieDetail(+id!, applicationLanguage.language);

  const { movieDetailImages, movieDetailsImagesLoading } =
    useMovieDetailPictures(+id!, applicationLanguage.language);

  if (movieDetailsLoading) return <p>Loading...</p>;
  if (movieDetailsImagesLoading) return <p>Loading...</p>;

  return (
    <>
      <Row gutter={[16, 16]} style={{ margin: "16px" }}>
        <Col span={6}>
          <Image
            src={
              "https://image.tmdb.org/t/p/original" + movieDetail?.poster_path
            }
            alt={movieDetail?.original_title}
          />
        </Col>
        <Col span={18} style={{ textAlign: "left" }}>
          <Row style={{ marginTop: "16px" }}>{movieDetail?.title}</Row>
          <Row style={{ marginTop: "16px" }}>{movieDetail?.overview}</Row>
          <Row style={{ marginTop: "16px" }}>
            {movieDetail?.genres.map((genre) => (
              <Tag color="#108ee9" key={genre.id}>
                {genre.name}
              </Tag>
            ))}
          </Row>
        </Col>
      </Row>
      <Row style={{ margin: "16px" }}>
        <div className="image-scroll-container">
          <Image.PreviewGroup>
            {movieDetailImages?.backdrops.map((image) => (
              <Image
                key={image.file_path}
                src={"https://image.tmdb.org/t/p/original" + image.file_path}
                width={100}
                height={40}
                style={{ marginRight: 8 }}
              />
            ))}
          </Image.PreviewGroup>
        </div>
      </Row>
    </>
  );
};

export default MovieDetail;
