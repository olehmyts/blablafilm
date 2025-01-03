import { Link, useLocation } from "react-router-dom";
import { routes } from "../router/routes";
import { Select, Switch } from "antd";
import useAppLanguage from "../hooks/useAppLanguage";
import { useLanguage } from "../store/changeLanguage.context";
import { useTheme } from "../store/theme.context";
import i18next, { t } from "i18next";
import { Theme } from "../interfaces/Theme";
import React from "react";



const Header = () => {
  const applicationLanguage = useLanguage();
  const applicationTheme = useTheme();
  const { languages } = useAppLanguage();
  const location = useLocation();

  const onChangeTheme = (checked: boolean) => {
    const theme = checked ? Theme.light : Theme.dark;
    applicationTheme.toggleTheme(theme)
    localStorage.setItem("theme", theme);
  };

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", applicationTheme.theme);
  }, [applicationTheme.theme]);

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

  function setLanguage(lang: string) {
    applicationLanguage.setLanguage(lang);
    localStorage.setItem("lang", lang);
    i18next.changeLanguage(lang);
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
          <Switch
            checkedChildren={t("Light")}
            unCheckedChildren={t("Dark")}
            onChange={onChangeTheme}
            defaultChecked={applicationTheme.theme === Theme.light ? true : false}
          />
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
