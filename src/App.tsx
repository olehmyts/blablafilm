import "./App.css";
// import useProducts from "./hooks/useProducts";
import { Row, Select } from "antd";
import useMovieGenres from "./hooks/useMovieGenres";

function App() {
  const { movieGenres, loading } = useMovieGenres();
  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <h1>Hello React!!! </h1>
      <Row>
        <Select
          style={{ width: 200, textAlign: "left" }}
          allowClear
          options={movieGenres.map((item) => ({
            value: item.id,
            label: item.name,
          }))}
        />
      </Row>
      {/* <Row>
        {products.map((product) => (
          <Card
            key={product.id}
            type="inner"
            title={product.title}
            style={{ width: 300, margin: 10 }}
          >
            <p>{product.description}</p>
          </Card>
        ))}
      </Row> */}
    </div>
  );
}

export default App;
