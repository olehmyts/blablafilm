import { Link } from "react-router-dom";
import { routes } from "../router/routes";
import { Select } from "antd";
import useAppLanguage from "../hooks/useAppLanguage";
import { useState } from "react";

const Header = () => {
  const { languages } = useAppLanguage();
  const [appLanguage, setAppLanguage] = useState<string>(
    localStorage.getItem("lang")!
  );
  function setLanguage(lang: string) {
    setAppLanguage(lang);
    localStorage.setItem("lang", lang);
  }

  return (
    <header style={{ background: "#282c34", padding: "10px", color: "white" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
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
        </div>
        {/* <div>
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
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
