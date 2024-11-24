import { Link, useLocation } from "react-router-dom";
import { routes } from "../router/routes";
import { Select } from "antd";
import useAppLanguage from "../hooks/useAppLanguage";
import { useLanguage } from "../store/changeLanguage.context";

const Header = () => {
  const applicationLanguage = useLanguage();
  const location = useLocation();

  const menuItems = [
    {
      key: routes.home,
      label: "Home",
    },
    {
      key: routes.films,
      label: "Films",
    },
    {
      key: routes.about,
      label: "About",
    },
  ];

  const { languages } = useAppLanguage();

  function setLanguage(lang: string) {
    applicationLanguage.setLanguage(lang)
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
          {menuItems.map((menuItem) => (
            <Link
              key={menuItem.key}
              to={menuItem.key}
              style={{
                padding: "0 10px",
                color: "white",
                textDecoration: "none",
                // backgroundColor:
                //   menuItem.key === location.pathname.slice(1) ||
                //   menuItem.key.split("/")[1] === location.pathname.split("/")[2]
                //     ? "#4267B2"
                //     : "",
                borderBottom:
                  menuItem.key === location.pathname.slice(1) ||
                  menuItem.key.split("/")[1] === location.pathname.split("/")[2]
                    ? "5px solid #4267B2"
                    : "",
              }}
            >
              {menuItem.label}
            </Link>
          ))}
        </div>
        <div>
          <Select
            style={{ width: 120, textAlign: "left" }}
            options={languages.map((item) => ({
              label: item.english_name,
              value: item.iso_639_1,
            }))}
            onChange={setLanguage}
            defaultValue={applicationLanguage?.language}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
