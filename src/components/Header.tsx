import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent3 from "./FrameComponent3";
import styles from "./Header.module.css";
import styles2 from "./FrameComponent3.module.css";
import Navbar from "./Navbar";
// import marv_gif from '../../public/marv_eyes_blinking.gif'

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {

  const [layout,setLayout]=useState<"web"|"mobile"|"tab"|"pc"|"laptop">(getLayout())
  const [navbarHeight,setNavbarHeight]=useState("0%");
  const [navbarScale,setNavbarScale]=useState(0);
  const navOptions=useRef([
    {name:"Home",id:"header"},
    {name:"About Us",id:"about-us"},
    {name:"Roadmap",id:"roadmap"},
    {name:"Marvnomics",id:"marvnomics"},
    {name:"How To Buy",id:"how-to-buy"},
    {name:"Marvmemes",id:"marv-memes"}
  ]).current

  useEffect(()=>{
    window.addEventListener("resize",()=>{
      layout!="mobile"?setNavbarHeight("0%"):null
      setLayout(getLayout())
    })
    setNavbarHeight("0%")
  },[])

  const scrollToSection = useCallback((sectionId: string) => {
    console.log("Scrolling to section:", sectionId);
    const anchor = document.querySelector(`[data-scroll-to='${sectionId}']`);
    if (anchor) {
      console.log("Found anchor:", anchor);
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`Cannot find anchor for sectionId '${sectionId}'`);
    }
  }, []);

  const handleNavClick = (sectionId: string) => {
    console.log("Nav clicked:", sectionId);
    scrollToSection(sectionId);
  };

  const navHandler=(action:"open"|"close")=>{
    if(action=="open")
    {
      setNavbarScale(1);
      setNavbarHeight("50%")
    }
    if(action=="close"){
      setNavbarHeight("0%");
      setTimeout(()=>setNavbarScale(0),300)
    }
  }

  return (
    <section className={[styles.header, className].join(" ")} id="header" data-scroll-to="header">
      <div  className={[styles.headerwrapper, className].join(" ")}>
        <div className={[styles.navOptions, className].join(" ")} style={{transform:"scaleY("+navbarScale+")",height:navbarHeight,zIndex:1}}>
          <div style={{width:"100%",height:"10%",display:"flex",justifyContent:"end"}}><button onClick={()=>navHandler("close")} style={{alignSelf:"end",height:"100%",margin:"none",border:"none",backgroundColor:"transparent"}}><img style={{height:"100%",width:"auto"}} src="/close.png"></img></button></div>
          <div style={{width:"100%",height:"85%",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center",gap:"5%",fontFamily:"var(--font-bangers)",color:"#0353B2"}}>
          {
            navOptions.map((navItem)=>
            <a onClick={()=>{handleNavClick(navItem.id);navHandler("close")}}>{navItem.name}</a>
            )
          }
          </div>
        </div>
        {
          layout=="mobile"
          ?
          <div className={[styles.navbar, className].join(" ")}>
              <div style={{width:"50%"}}><button onClick={()=>navHandler("open")} style={{alignSelf:"end",border:"none",margin:"none",backgroundColor:"transparent"}}><img style={{height:"24px",width:"auto"}} src="/menu.png"></img></button></div>
          </div>
          :
          <div className={[styles.navbar, className].join(" ")}>
            <div style={{display:"flex",flexDirection:"row",gap:"15px",marginLeft:"3%"}}>
              {
                navOptions.map((navItem)=>
                <a onClick={()=>handleNavClick(navItem.id)}>{navItem.name}</a>
                )
              }
            </div>
            <div>options</div>
          </div>
        }
        <div className={[styles.titlecontainer, className].join(" ")}>
          <div className={[styles.title, className].join(" ")}>
            <div style={{color:"white",textShadow:"0px 10px black",transform:"rotate(-6deg) translate(0px, 5px)"}}>M</div>
            <div style={{color:"white",textShadow:"0px 10px black",transform:"rotate(356deg) translate(0px, -3px)"}}>A</div>
            <div style={{color:"white",textShadow:"0px 10px black",transform:"rotate(1deg) translate(0px, 0px)"}}>R</div>
            <div style={{color:"white",textShadow:"0px 10px black",transform:"rotate(4deg) translate(0px, 5px)"}}>V</div>
          </div>
          <p className={styles.subtitle}>
            Marv is a slightly racist, shy frog who loves to dress
            up.In the world of Solana, Marv has become a unique
            and influential figure.
          </p>
          <div className={[styles.buynowwrapper, className].join(" ")}>
            <button className={styles.buynowbutton}>
              <div className={styles.buynowtext}>Buy Now</div>
            </button>
          </div>
        </div>
        <div className={[styles.bgwrapper, className].join(" ")}>
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
  let layout:"web"|"mobile"|"tab"|"pc"|"laptop"="web";
  if(window.innerWidth<=500)
  {
    layout="mobile"
  }
  if(window.innerWidth>500 && window.innerWidth<=1024)
  {
    layout="tab"
  }
  if(window.innerWidth>1024 && window.innerWidth<=1920)
  {
    layout="laptop"
  }
  if(window.innerWidth>1920)
  {
    layout="pc"
  }
  // if(window.innerWidth>500 && window.innerWidth<=1080)
  // {
    
  // }
  return layout
}

export default Header