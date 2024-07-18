import React from "react";
import styles from "./LoadingScreen.module.css";

const LoadingScreen: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <img src="/buy-marv.gif" className={styles.backgroundGif} alt="Loading" />
      <div className={styles.loadingBar}></div>
    </div>
  );
};

export default LoadingScreen;
