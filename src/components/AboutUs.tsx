import { FunctionComponent, useEffect, useState } from "react";
import styles from "./AboutUs.module.css";
//import aboutusBg from '../../public/aboutusBg.png'

export type AboutUsType = {
  className?: string;
};

const AboutUs: FunctionComponent<AboutUsType> = ({ className = "" }) => {

  useEffect(()=>{

  },[])

  return (
    <section className={[styles.mainwrapper, className].join(" ")} id="aboutus" data-scroll-to="about-us">
      <div className={[styles.subwrapper, className].join(" ")}>
        <img
          className={[styles.cloud1, className].join(" ")}
          loading="lazy"
          alt=""
          src={"/cloud.png"}
        />
        <img
          className={[styles.marv2, className].join(" ")}
          loading="lazy"
          alt=""
          src={"/marv-king.png"}
        />
        <img
          className={[styles.cloud2, className].join(" ")}
          loading="lazy"
          alt=""
          src={"/cloud.png"}
        />
        <img
          className={[styles.marv1, className].join(" ")}
          loading="lazy"
          alt=""
          src={"/marv-king.png"}
        />
        <div className={[styles.title, className].join(" ")}>
          KING
          {/* <img
            className={[styles.marvking, className].join(" ")}
            loading="lazy"
            alt=""
            src={"/marv-king.png"}
          /> */}
          {/* <div>K</div>
            
          <div>N</div>
          <div>G</div>*/}
        </div> 
        <div className={[styles.subtitle, className].join(" ")}><p style={{margin:"10px"}}>A new king has risen!</p></div>
        <div className={[styles.description, className].join(" ")}>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            {/* <p style={{fontFamily:"var(--font-bangers)"}}>Origin Story</p> */}
            <p className={[styles.para, className].join(" ")}>
              Marv grew up in the shadow of his famous cousin Pepe. While Pepe's image evolved and became more mainstream, Marv doubled down on his edgy internet persona. Feeling fed up with Pepe's "gentrification by wokes", Marv found his niche in Solana. He's slightly racist, socially awkward and shy. However, Marv's love for cosplaying adds a flair to his character, making him a stylish and memorable ruler.
              As Pepe became adopted by a wider audience, Marv saw an opportunity to become the face of the degen community. He embraced Solana, seeing it as a refuge from political correctness. Marv's antics blur the line between genuine degeneracy and performance art. Masking his insecurities behind layers of fabric and face paint.
            </p>
          </div>
          {/* <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <p style={{fontFamily:"var(--font-bangers)"}}>What makes Marv attractive</p>
            <p className={[styles.para, className].join(" ")}>
            1. Marv sees himself as maintaining the original spirit of internet meme culture<br></br>
            2. Contrast with Pepe's mainstream evolution<br></br>
            3. Embodiment of degen culture<br></br>
            4. Insecurity masked by over-the-top online behavior<br></br>
            5. Considers racism a performance art<br></br>
            6. Extensive wardrobe of outrageous outfits and cosplays<br></br>
            7. Marv represents the more provocative side of crypto culture<br></br>
            8. Embraces being an outsider and revels in his non-mainstream status<br></br>
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


{/* <section  style={{width:"100%",height:"100vh",maxHeight:"700px",minHeight:"650px",backgroundPositionY:"bottom",backgroundRepeat:"no-repeat",backgroundSize:"100%",backgroundImage:"url(/aboutusBg.png)"}} className={[styles.aboutUs, className].join(" ")}  data-scroll-to="About">
      <div style={{width:"100%",height:"100%",maxWidth:"1440px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"5%"}}>
        <div style={{width:"40%"}}>
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
      <div style={{width:"55%"}}>
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
      </div>
    </section> */}

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