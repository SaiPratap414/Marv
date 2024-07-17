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
      <img style={{width:"100vw",maxWidth:"2000px",height:'auto',alignSelf:"center"}} src="/banner.gif"></img>
      <Marvnomics />
      <Howtobuy />
      <Marvmemes />
      <Footer />
    </div>
  );
};

export default Dev;
