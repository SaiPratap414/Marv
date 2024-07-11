import { FunctionComponent, useEffect, useState } from "react";
import styles from "./AboutUs.module.css";
//import aboutusBg from '../../public/aboutusBg.png'

export type AboutUsType = {
  className?: string;
};

const AboutUs: FunctionComponent<AboutUsType> = ({ className = "" }) => {

  const [windowDim,setWindowDim]=useState({width:0,height:0})
  //const [pageDim,setPageDim]=useState({width:0,height:0})

  useEffect(()=>{
    window.addEventListener("resize",(e)=>{
      console.log("dim",window.innerWidth,window.outerWidth);
      //setPageDim({width:window.innerWidth,height:window.innerHeight})
    })
    //setPageDim({width:window.innerWidth,height:window.innerHeight})
    setWindowDim({width:window.innerWidth,height:window.innerHeight*0.75})
  },[])

  return (
    <section style={{width:"100%",height:windowDim.height+"px",backgroundPositionY:"bottom",backgroundRepeat:"no-repeat",backgroundSize:"100%",backgroundImage:"url(/aboutusBg.png)"}} className={[styles.aboutUs, className].join(" ")}  data-scroll-to="About">
      <div style={{width:0.4*windowDim.width+"px"}}>
      <div style={{display:"flex",flexDirection:"row"}}>
        <div style={{width:"50%",display:"flex",alignItems:"flex-end",justifyContent:"center",transform:"translate(-50%,0)"}}>
          <img
            className={styles.crowmAnimationIcon}
            loading="lazy"
            alt=""
            src="/c.gif"
          />
        </div>
        <div style={{width:"50%"}}>
          <img
            className={styles.marv0005Icon}
            loading="lazy"
            alt=""
            src="/marv0005@2x.png"
          />
        </div>
      </div>
      <div><text className={styles.aNewKing}>A New King Has Risen</text></div>
    </div>
    <div style={{width:0.6*windowDim.width+"px"}}>
      <p style={{fontFamily:"var(--font-patrick-hand)",fontSize:"0.3em",color:"#E8AC25",textAlign:"start"}}>
        Marv, a frog with a distinct personality, stands out in the Solana
        ecosystem. He’s slightly racist, a trait that sometimes leads to
        awkward social interactions. His shyness makes him a reserved
        figure, often observing more than participating. However, Marv's
        love for dressing up adds a flair to his character, making him a
        stylish and memorable ruler.
      </p>
      <p style={{fontFamily:"var(--font-patrick-hand)",fontSize:"0.3em",color:"white",textAlign:"start"}}>
        Despite his quirks, Marv has risen to prominence in Solana,
        where he rules with a gentle touch and a keen sense of
        fashion. His approach to leadership combines his shy nature
        with an undeniable charisma, creating a balance that resonates
        with his community.
      </p>
    </div>
    </section>
  );
};

export default AboutUs;


{/* <div style={{width:0.3*windowDim.width+"px"}}>
  <div style={{display:"flex",flexDirection:"row"}}>
    <div style={{width:"50%",display:"flex",alignItems:"flex-end",justifyContent:"center",transform:"translate(-50%,0)"}}>
      <img
        className={styles.crowmAnimationIcon}
        loading="lazy"
        alt=""
        src="/c.gif"
      />
    </div>
    <div style={{width:0.5*windowDim.width+"px"}}>
      <img
        className={styles.marv0005Icon}
        loading="lazy"
        alt=""
        src="/marv0005@2x.png"
      />
    </div>
  </div>
  <div><h3 className={styles.aNewKing}>A New King Has Risen</h3></div>
</div>
<div style={{width:"70%"}}>
  <p style={{fontFamily:"var(--font-patrick-hand)",fontSize:"20px",textAlign:"start"}}>
    Marv, a frog with a distinct personality, stands out in the Solana
    ecosystem. He’s slightly racist, a trait that sometimes leads to
    awkward social interactions. His shyness makes him a reserved
    figure, often observing more than participating. However, Marv's
    love for dressing up adds a flair to his character, making him a
    stylish and memorable ruler.
  </p>
  <p style={{fontFamily:"var(--font-patrick-hand)",fontSize:"28px",textAlign:"start"}}>
    Despite his quirks, Marv has risen to prominence in Solana,
    where he rules with a gentle touch and a keen sense of
    fashion. His approach to leadership combines his shy nature
    with an undeniable charisma, creating a balance that resonates
    with his community.
  </p>
</div> */}

{/* <section className={[styles.aboutUs, className].join(" ")}  data-scroll-to="About">
      <div className={styles.aboutUsContent}>
        <img className={styles.groupIcon} alt="" src="/group.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.aNewKingHasRisenParent}>
          <h3 className={styles.aNewKing}>A New King Has Risen</h3>
          <img
            className={styles.crowmAnimationIcon}
            loading="lazy"
            alt=""
            src="/c.gif"
          />
        </div>
        <div className={styles.marvImage}>
          <img
            className={styles.marv0005Icon}
            loading="lazy"
            alt=""
            src="/marv0005@2x.png"
          />
        </div>
      </div>
      <div className={styles.aboutUsInner}>
        <div className={styles.marvAFrogWithADistinctPParent}>
          <div className={styles.marvAFrog}>
            Marv, a frog with a distinct personality, stands out in the Solana
            ecosystem. He’s slightly racist, a trait that sometimes leads to
            awkward social interactions. His shyness makes him a reserved
            figure, often observing more than participating. However, Marv's
            love for dressing up adds a flair to his character, making him a
            stylish and memorable ruler.
          </div>
          <div className={styles.despiteHisQuirksMarvHasRWrapper}>
            <div className={styles.despiteHisQuirksContainer}>
              <span>
                <p className={styles.despiteHisQuirks}>
                  Despite his quirks, Marv has risen to prominence in Solana,
                  where he rules with a gentle touch and a keen sense of
                  fashion. His approach to leadership combines his shy nature
                  with an undeniable charisma, creating a balance that resonates
                  with his community.
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
              </span>
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
      </div>
    </section> */}