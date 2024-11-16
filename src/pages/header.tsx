import { Link } from "react-router-dom";
import { routes } from "../router/routes";

const Header = () => {
  return (
    <header style={{ background: "#282c34", padding: "10px", color: "white" }}>
      <nav>
        <Link
          to={routes.home}
          style={{ margin: "0 10px", color: "white", textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          to={routes.films}
          style={{ margin: "0 10px", color: "white", textDecoration: "none" }}
        >
          Films
        </Link>
        <Link
          to={routes.about}
          style={{ margin: "0 10px", color: "white", textDecoration: "none" }}
        >
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
