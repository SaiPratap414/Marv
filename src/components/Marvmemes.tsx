import { FunctionComponent } from "react";
import styles from "./Marvmemes.module.css";

export type MarvmemesType = {
  className?: string;
};

const Marvmemes: FunctionComponent<MarvmemesType> = ({ className = "" }) => {
  return (
    <section className={[styles.mainwrapper, className].join(" ")} id="header">
      <div className={[styles.subwrapper, className].join(" ")}>
        <div className={[styles.title, className].join(" ")}>MARVMEMES</div>
        <div className={[styles.body, className].join(" ")}>
          <Framecontainer className={className} color="linear-gradient(#FD8A8A, #AD5B5B)" image="/buy1-1@2x.png" title="Download Phantom Extension" subTitle="Download and install ​phantom on the ​appstore, or,​alternatively if ​you’re on desktop ​download and install ​thebrowser ​extension."></Framecontainer>
          <Framecontainer className={className} color="linear-gradient(#F9B889, #926546)" image="/buy_2.png" title="Secure your" subTitle="you can buy ​$sol from any ​exchange and ​even on ​phantom ​wallet"></Framecontainer>
          <Framecontainer className={className} color="linear-gradient(#58A098, #69C6BA)" image="/buy_3.png" title="Buy some $Marv" subTitle="Now go to ​Raydium and paste ​the $MARV ​Contract Address ​to swap your SOL."></Framecontainer>
          <Framecontainer className={className} color="linear-gradient(#AC9CDB, #7462A6)" image="/buy_4.png" title="Add to Your Wallet" subTitle="Now you’re all set! ​Welcome aboard the ​next rocket to the ​moon, just import the ​contract address to ​view you’re holdings ​and you can track ​your earnings."></Framecontainer>
        </div>
      </div>
    </section>
  );
};

const Framecontainer=(props:{className:string,image:string,title:string,subTitle:string,color:string})=>{

  return(
    <div className={[styles.frame, props.className].join(" ")} style={{backgroundImage:props.color}}>
      <img
        style={{width:"auto",height:"35px",alignSelf:"center",transform:"translateY(-17px)"}}
        loading="lazy"
        alt=""
        src={props.image}
      />
      <div style={{height:"85%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center"}}>
        <p className={[styles.frametitle, props.className].join(" ")}>{props.title}</p>
        <p className={[styles.framesubtitle, props.className].join(" ")}>{props.subTitle}</p>
      </div>
    </div>
  )
}

{/* <section className={[styles.marvmemes, className].join(" ")} data-scroll-to="Memes">
  <div className={styles.memes}>
    <div className={styles.marvmemes1}>MARVMEMES</div>
    <div className={styles.memes1}>
      <div className={styles.line1Memes}>
        <div className={styles.memeItem}>
          <div className={styles.marvmemeItems}>
            <div className={styles.marvmemeContentParent}>
              <img
                className={styles.marvmemeContentIcon}
                alt=""
                src="/marvwebnew.png"
              />
              <img className={styles.pinIcon} alt="" src="/pin.svg" />
            </div>
          </div>
        </div>
        <div className={styles.memeItem1}>
          <div className={styles.marvmemeItems1}>
            <img className={styles.pinIcon1} alt="" src="/pin-1@2x.png" />
            <img
              className={styles.marvmemeContentIcon1}
              loading="lazy"
              alt=""
              src="/frame-64@2x.png"
            />
          </div>
        </div>
        <div className={styles.marvmemeItems2}>
          <div className={styles.marvmemeContentGroup}>
            <img
              className={styles.marvmemeContentIcon2}
              alt=""
              src="/marvmeme-content@2x.png"
            />
            <img className={styles.pinIcon2} alt="" src="/pin-2@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.line1Memes1}>
        <div className={styles.line1MemesInner}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-63-1@2x.png"
              />
              <img
                className={styles.pinIcon3}
                loading="lazy"
                alt=""
                src="/pin.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.line1MemesChild}>
          <div className={styles.pinParent}>
            <img
              className={styles.pinIcon4}
              loading="lazy"
              alt=""
              src="/pin-4@2x.png"
            />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/frame-64-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameInner}
              alt=""
              src="/frame-65-1@2x.png"
            />
            <img
              className={styles.pinIcon5}
              loading="lazy"
              alt=""
              src="/pin-5@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.line3Memes}>
        <div className={styles.line3MemesInner}>
          <div className={styles.frameContainer}>
            <img
              className={styles.frameIcon}
              alt=""
              src="/frame-65-2@2x.png"
            />
            <img
              className={styles.pinIcon6}
              loading="lazy"
              alt=""
              src="/pin-6@2x.png"
            />
          </div>
        </div>
        <div className={styles.line3MemesChild}>
          <div className={styles.frameWrapper1}>
            <div className={styles.pinIconWrapper}>
              <div className={styles.pinIcon7}>
                <img
                  className={styles.marvmemeImageIcon}
                  alt=""
                  src="/frame-64-2@2x.png"
                />
                <img
                  className={styles.pinIcon8}
                  loading="lazy"
                  alt=""
                  src="/pin-7@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line3MemesInner1}>
          <div className={styles.frameWrapper2}>
            <div className={styles.marvmemeImageParent}>
              <img
                className={styles.marvmemeImageIcon1}
                alt=""
                src="/frame-63-2@2x.png"
              />
              <img
                className={styles.pinIcon9}
                loading="lazy"
                alt=""
                src="/pin.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

export default Marvmemes;
