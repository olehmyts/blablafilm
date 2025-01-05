import { Link, useLocation } from "react-router-dom";
import { routes } from "../../router/routes";
import { useLanguage } from "../../store/changeLanguage.context";
import { t } from "i18next";
import { SelectLanguage } from "../selectLanguage/selectLanguage.component";
import { SwitchTheme } from "../switchTheme/switchTheme.component";

const Header = () => {
  useLanguage();
  const location = useLocation();

  const menuItems = [
    {
      key: routes.home,
      label: t("Home"),
    },
    {
      key: routes.films,
      label: t("Films"),
    },
    {
      key: routes.about,
      label: t("About"),
    },
  ];

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
                borderBottom:
                  (menuItem.key === location.pathname.slice(1) &&
                    location.pathname.split("/")[2] === "") ||
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
          <SwitchTheme />
        </div>
        <div>
          <SelectLanguage />
        </div>
      </nav>
    </header>
  );
};

export default Header;
