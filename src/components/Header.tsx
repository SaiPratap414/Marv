import { FunctionComponent, useEffect, useState } from "react";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent3 from "./FrameComponent3";
import styles from "./Header.module.css";
import styles2 from "./FrameComponent3.module.css";
// import marv_gif from '../../public/marv_eyes_blinking.gif'

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {

  const [layout,setLayout]=useState(getLayout())

  useEffect(()=>{
    window.addEventListener("resize",()=>{
      setLayout(getLayout())
    })
  },[])

  return (
    <section className={[styles.header, className].join(" ")} id="header">
      <div  className={[styles.headerwrapper, className].join(" ")}>
        <div className={[styles.navbar, className].join(" ")}>h</div>
        <div className={[styles.titlecontainer, className].join(" ")}>
          <div className={[styles.title, className].join(" ")}>
            <div style={{color:"white",textShadow:"0px 10px black",transform:"rotate(-4deg) translate(0px, 3px)"}}>M</div>
            <div style={{color:"white",textShadow:"0px 10px black",transform:"rotate(-4deg) translate(0px, -3px)"}}>A</div>
            <div style={{color:"white",textShadow:"0px 10px black",transform:"rotate(-4deg) translate(0px, 0px)"}}>R</div>
            <div style={{color:"white",textShadow:"0px 10px black",transform:"rotate(4deg) translate(0px, 5px)"}}>V</div>
          </div>
          <p className={styles.subtitle}>
            Marv is a slightly racist, shy frog who loves to dress
            up.<br></br>In the world of Solana, Marv has become a unique
            and influential figure.
          </p>
          <div className={[styles.buynowwrapper, className].join(" ")}>
            <button className={styles.buynowbutton}>
              <div className={styles.buynowtext}>Buy Now</div>
            </button>
          </div>
        </div>
        <div style={{height:"50%",display:"flex",flexDirection:"column",justifyContent:"end"}}>
          <img
            className={styles.bg}
            loading="lazy"
            alt=""
            src={layout=="mobile"?"/HomeBgMobile.png":(layout=="tab"?"/HomeBgIpad.png":"/HomeBgLaptop.png")}
          />
        </div>
      </div>
    </section>
  )
}

const getLayout=()=>{
  let layout="web";
  if(window.innerWidth<=500)
  {
    layout="mobile"
  }
  if(window.innerWidth>500 && window.innerWidth<=1080)
  {
    layout="tab"
  }
  // if(window.innerWidth>500 && window.innerWidth<=1080)
  // {
    
  // }
  return layout
}

export default Header