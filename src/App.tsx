import "./App.css";
import useProducts from "./hooks/useProducts";
import { Card, Row } from "antd";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log(apiKey);
  console.log(apiUrl);

  const { products, loading } = useProducts();

  if (loading) return <p>Loading...</p>;
  return (
    <div className="App">
      <h1>Hello React!!! </h1>
      <Row>
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
      </Row>
    </div>
  );
}

export default App;
