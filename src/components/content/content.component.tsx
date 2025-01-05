import BaseRouter from "../../router/base.router";
import { useLanguage } from "../../store/changeLanguage.context";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";

const Content = () => {
  useLanguage();
  return (
    <>
      <Header />
      <div className="content">
        <BaseRouter />
      </div>
      <Footer />
    </>
  );
};

export default Content;
