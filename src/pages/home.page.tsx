import React from "react";
import { t } from "i18next";

import { useLanguage } from "../store/changeLanguage.context";

const Home: React.FC = () => {
  useLanguage();

  return <h1>{t("Home")}</h1>;
};

export default Home;
