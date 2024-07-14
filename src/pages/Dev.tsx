import { FunctionComponent } from "react";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";
import Roadmap from "../components/Roadmap";
import Marvnomics from "../components/Marvnomics";
import Howtobuy from "../components/Howtobuy";
import Marvmemes from "../components/Marvmemes";
import Footer from "../components/Footer";
import styles from "./Dev.module.css";

const Dev: FunctionComponent = () => {
  return (
    <div className={styles.dev}>
      <Header />
      <AboutUs />
      {/* <Gallery /> */}
      <Roadmap />
      <Marvnomics />
      <Howtobuy />
      {/* <Marvmemes /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Dev;
