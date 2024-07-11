import { FunctionComponent, useEffect, useState } from "react";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent3 from "./FrameComponent3";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {

  const [windowDim,setWindowDim]=useState({width:0,height:0});

  useEffect(()=>{
    console.log("height",window.innerHeight)
    setWindowDim({width:window.innerWidth,height:window.innerHeight})

    window.addEventListener("resize",(e)=>console.log("new dim",window.innerHeight,window.outerHeight))
  },[])

  return (
    <section style={{width:"100vw",height:windowDim.height+"px"}} className={[styles.header, className].join(" ")} id="header">
      <FrameComponent4 />
      <FrameComponent3 />
    </section>
  );
};

export default Header;
