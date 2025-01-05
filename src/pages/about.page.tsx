import { useLanguage } from "../store/changeLanguage.context";
import { t } from "i18next";

const About: React.FC = () => {
  useLanguage();
  
  return <h1>{t("About")}</h1>;
};

export default About;
