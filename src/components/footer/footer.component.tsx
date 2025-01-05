import { t } from "i18next";
import React from "react";

const Footer: React.FC = () => {

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
