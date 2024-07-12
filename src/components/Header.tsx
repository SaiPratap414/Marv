import { FunctionComponent, useEffect, useState } from "react";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent3 from "./FrameComponent3";
import styles from "./Header.module.css";
import styles2 from "./FrameComponent3.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {

  useEffect(()=>{

  },[])

  return (
    <section style={{width:"100%",height:"100vh",display:"flex",gap:"10%",flexDirection:"column",justifyContent:"center",alignItems:"center"}} className={[styles.header, className].join(" ")} id="header">
      <div></div>
      <div style={{height:"15%",width:"100%"}}><FrameComponent4 /></div>
      <div style={{height:"75%",width:"100%",display:"flex",flexDirection:"row",maxWidth:"1440px"}}>
        <div style={{width:"40%",height:"100%"}}>
          <img
            style={{width:"75%",height:"auto"}}
            loading="lazy"
            alt=""
            src="/marv-web-removed-bg0001-1@2x.png"
          />
        </div>
        <div style={{width:"60%",height:"100%",display:"flex",flexDirection:"column",justifyContent:'center',alignItems:"center",position:"relative"}}>
          <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
            <div style={{color:"white",textShadow:"0px 10px black",transform:"rotate(-4deg) translate(0px, 0px)"}}>M</div>
            <div style={{color:"white",textShadow:"0px 10px black",transform:"rotate(-4deg) translate(0px, -7px)"}}>A</div>
            <div style={{color:"white",textShadow:"0px 10px black",transform:"rotate(-4deg) translate(0px, -15px)"}}>R</div>
            <div style={{color:"white",textShadow:"0px 10px black",transform:"rotate(-4deg) translate(0px, -23px)"}}>V</div>
          </div>
          <p style={{maxWidth:"75%",fontFamily:"var(--font-patrick-hand)",color:"white",fontSize:"24px"}}>
            Marv is a slightly racist, shy frog who loves to dress
            up.  In the world of Solana, Marv has become a unique
            and influential figure.
          </p>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:'center'}}>
            <button className={styles2.buyBackgroundParent}>
              <div className={styles2.buyBackground}/>
              <div className={styles2.buyNow}>Buy Now</div>
            </button>
          </div>
        </div>
        <div style={{position:"absolute"}}>
          {/* <img
            style={{width:"50%",height:"auto"}}
            loading="lazy"
            alt=""
            src="/marv-web-new-set0011@2x.png"
          /> */}
        </div>
      </div>
    </section>
  );
};
{/*  */}
{/* <FrameComponent3 /> */}
export default Header;
