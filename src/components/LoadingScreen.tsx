import React, { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

const LoadingScreen: React.FC = () => {

  const [layout, setLayout] = useState<"web"|"mobile"|"tab"|"pc"|"laptop">(getLayout());

  useEffect(()=>{
    window.addEventListener("resize", () => {
      setLayout(getLayout());
    });
  },[])

  return (
    <div className={styles.loadingContainer}>
      <img src={layout=="mobile"?"/buy-marv-mobile.gif":"/buy-marv.gif"} className={styles.backgroundGif} alt="Loading" />
      <div className={styles.loadingBar}></div>
    </div>
  );
};

const getLayout = () => {
  let layout: "web"|"mobile"|"tab"|"pc"|"laptop" = "web";
  if (window.innerWidth <= 500) {
    layout = "mobile";
  }
  if (window.innerWidth > 500 && window.innerWidth <= 1024) {
    layout = "tab";
  }
  if (window.innerWidth > 1024 && window.innerWidth <= 1920) {
    layout = "laptop";
  }
  if (window.innerWidth > 1920) {
    layout = "pc";
  }
  return layout;
}

export default LoadingScreen;
