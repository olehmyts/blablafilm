import { t } from "i18next";
import { useLanguage } from "../../store/changeLanguage.context";
import React from "react";

const Footer: React.FC = () => {
  useLanguage();

  return (
    <footer
      style={{
        background: "#282c34",
        padding: "10px",
        color: "white",
        textAlign: "center",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Bla Bla film.{" "}
        {t("All rights reserved.")}
      </p>
    </footer>
  );
};
export default Footer;
