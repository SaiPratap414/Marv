import { FunctionComponent, useEffect, useState } from "react";
import styles from "./Roadmap.module.css";

export type RoadmapType = {
  className?: string;
};

const Roadmap: FunctionComponent<RoadmapType> = ({ className = "" }) => {

  const [windowDim,setWindowDim]=useState({width:0,height:0})

  useEffect(()=>{
    setWindowDim({width:window.innerWidth,height:window.innerHeight})

    window.addEventListener("resize",()=>console.log("resized"))
  },[])

  return (
    <section className={[styles.mainwrapper, className].join(" ")} id="roadmap" data-scroll-to="roadmap">
      <div className={[styles.subwrapper, className].join(" ")}>
        <div className={[styles.title, className].join(" ")}>ROADMAP</div>
        <div className={[styles.roadmap, className].join(" ")}>
          <div className={[styles.state1wrapper, className].join(" ")}>
            <div className={[styles.state1, className].join(" ")}>
              <img
                className={[styles.arrow1, className].join(" ")}
                loading="lazy"
                alt=""
                src={"/arrow.png"}
              />
              <img
                style={{width:"auto",height:"100%"}}
                loading="lazy"
                alt=""
                src={"/roadmap_1.png"}
              />
            </div>
          </div>
          <div className={[styles.state2wrapper, className].join(" ")}>
            <div className={[styles.state2, className].join(" ")}>
              <img
                className={[styles.arrow2, className].join(" ")}
                loading="lazy"
                alt=""
                src={"/arrow.png"}
              />
              <img
                style={{width:"auto",height:"100%"}}
                loading="lazy"
                alt=""
                src={"/roadmap_2.png"}
              />
            </div>
          </div>
          <div className={[styles.state3wrapper, className].join(" ")}>
            <div className={[styles.state3, className].join(" ")}>
              <img
                className={[styles.arrow1, className].join(" ")}
                loading="lazy"
                alt=""
                src={"/arrow.png"}
              />
              <img
                style={{width:"auto",height:"100%"}}
                loading="lazy"
                alt=""
                src={"/roadmap_3.png"}
              />
            </div>
          </div>
          <div className={[styles.state4wrapper, className].join(" ")}>
            <div className={[styles.state4, className].join(" ")}>
              <img
                style={{width:"auto",height:"100%"}}
                loading="lazy"
                alt=""
                src={"/roadmap_4.png"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

{/* <section style={{width:"100%",height:"200vh",maxHeight:"1400px",minHeight:"1300px",display:"flex",gap:"10%",padding:"20px",flexDirection:"column",justifyContent:"center",alignItems:"center"}} className={[styles.roadmap, className].join(" ")} data-scroll-to="Roadmap">
  <div style={{width:"100%",height:"100%",maxWidth:"1440px",padding:"50px"}}>
    <div style={{width:"100%",height:"5%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}><h1 style={{textAlign:"center",margin:"10px"}}>ROADMAPP</h1></div>
    <div style={{height:"95%",width:"100%",display:"flex",flexDirection:"column"}}>
      <div style={{height:"25%",width:"100%",display:"flex",flexDirection:"row"}}>
        <div style={{width:"50%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative"}}>
          <div style={{position:"absolute",top:"100%",left:"80%",transform:"scaleX(-1) rotatez(10deg)"}}>
            <img
                style={{width:"80%",height:"auto"}}
                loading="lazy"
                alt=""
                src="/vector-18.svg"
              />
          </div>
          <img
            style={{width:"80%",height:"auto"}}
            loading="lazy"
            alt=""
            src="/frame-119@2x.png"
          /></div>
        <div style={{width:"50%",height:"100%"}}></div>
      </div>
      <div style={{height:"25%",width:"100%",display:"flex",flexDirection:"row"}}>
        <div style={{width:"50%",height:"100%"}}></div>
        <div style={{width:"50%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative"}}>
          <div style={{position:"absolute",top:"100%",left:"0%"}}>
            <img
                style={{width:"80%",height:"auto"}}
                loading="lazy"
                alt=""
                src="/vector-18.svg"
              />
          </div>
          <img
            style={{width:"80%",height:"auto"}}
            loading="lazy"
            alt=""
            src="/frame-123@2x.png"
          /></div>
      </div>
      <div style={{height:"25%",width:"100%",display:"flex",flexDirection:"row"}}>
        <div style={{width:"50%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative"}}>
          <div style={{position:"absolute",top:"100%",left:"80%",transform:"scaleX(-1) rotatez(10deg)"}}>
            <img
                style={{width:"80%",height:"auto"}}
                loading="lazy"
                alt=""
                src="/vector-18.svg"
              />
          </div>
          <img
            style={{width:"80%",height:"auto"}}
            loading="lazy"
            alt=""
            src="/frame-124@2x.png"
          /></div>
        <div style={{width:"50%",height:"100%"}}></div>
      </div>
      <div style={{height:"25%",width:"100%",display:"flex",flexDirection:"row"}}>
        <div style={{width:"50%",height:"100%"}}></div>
        <div style={{width:"50%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <img
            style={{width:"80%",height:"auto"}}
            loading="lazy"
            alt=""
            src="/frame-119@2x.png"
          /></div>
      </div>
    </div>
  </div>
</section> */}

{/* <section className={[styles.roadmap, className].join(" ")} data-scroll-to="Roadmap">
  <div className={styles.roadmapInner}>
    <div className={styles.roadmappParent}>
      <div className={styles.roadmapp}>ROADMAPP</div>
      <div className={styles.roadmapContent}>
        <div className={styles.roadMapImageContent}>
          <img className={styles.roaMap1} alt="" src="/roa-map-1@2x.png" />
          <img
            className={styles.starsIcon}
            loading="lazy"
            alt=""
            src="/stars@2x.png"
          />
          <img
            className={styles.starsIcon1}
            loading="lazy"
            alt=""
            src="/stars-1@2x.png"
          />
          <img
            className={styles.roadMapImageContentChild}
            alt=""
            src="/vector-17.svg"
          />
        </div>
      </div>
    </div>
  </div>
  <img
    className={styles.starsIcon2}
    loading="lazy"
    alt=""
    src="/stars-2@2x.png"
  />
  <div className={styles.movingFrame}>
    <div className={styles.frameParent}>
      <div className={styles.marvParent}>
        <h3 className={styles.marv}>$MARV</h3>
        <div className={styles.imMarv}>#I’M MARV</div>
      </div>
      <div className={styles.marvGroup}>
        <h3 className={styles.marv1}>$MARV</h3>
        <div className={styles.imMarv1}>#I’M MARV</div>
      </div>
      <div className={styles.marvContainer}>
        <h3 className={styles.marv2}>$MARV</h3>
        <div className={styles.imMarv2}>#I’M MARV</div>
      </div>
      <div className={styles.frameDiv}>
        <h3 className={styles.marv3}>$MARV</h3>
        <div className={styles.imMarv3}>#I’M MARV</div>
      </div>
      <div className={styles.marvParent1}>
        <h3 className={styles.marv4}>$MARV</h3>
        <div className={styles.imMarv4}>#I’M MARV</div>
      </div>
      <div className={styles.marvParent2}>
        <h3 className={styles.marv5}>$MARV</h3>
        <div className={styles.imMarv5}>#I’M MARV</div>
      </div>
      <div className={styles.marvParent3}>
        <h3 className={styles.marv6}>$MARV</h3>
        <div className={styles.imMarv6}>#I’M MARV</div>
      </div>
      <div className={styles.marvParent4}>
        <h3 className={styles.marv7}>$MARV</h3>
        <div className={styles.imMarv7}>#I’M MARV</div>
      </div>
      <div className={styles.marvParent5}>
        <h3 className={styles.marv8}>$MARV</h3>
        <div className={styles.imMarv8}>#I’M MARV</div>
      </div>
      <div className={styles.marvParent6}>
        <h3 className={styles.marv9}>$MARV</h3>
        <div className={styles.imMarv9}>#I’M MARV</div>
      </div>
      <div className={styles.marvParent7}>
        <h3 className={styles.marv10}>$MARV</h3>
        <div className={styles.imMarv10}>#I’M MARV</div>
      </div>
      <div className={styles.marvParent8}>
        <h3 className={styles.marv11}>$MARV</h3>
        <div className={styles.imMarv11}>#I’M MARV</div>
      </div>
      <div className={styles.marvParent9}>
        <h3 className={styles.marv12}>$MARV</h3>
        <div className={styles.imMarv12}>#I’M MARV</div>
      </div>
      <div className={styles.marvParent10}>
        <h3 className={styles.marv13}>$MARV</h3>
        <div className={styles.imMarv13}>#I’M MARV</div>
      </div>
    </div>
  </div>
  <img className={styles.roadmapChild} alt="" src="/frame-119@2x.png" />
  <img
    className={styles.starsIcon3}
    loading="lazy"
    alt=""
    src="/stars-3@2x.png"
  />
  <img className={styles.roadmapItem} alt="" src="/frame-123@2x.png" />
  <img className={styles.frameIcon} alt="" src="/frame-124@2x.png" />
  <img className={styles.vectorIcon} alt="" src="/vector-18.svg" />
  <img
    className={styles.roadmapChild1}
    loading="lazy"
    alt=""
    src="/vector-19.svg"
  />
</section> */}
