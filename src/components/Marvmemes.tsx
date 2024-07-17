import { FunctionComponent } from "react";
import styles from "./Marvmemes.module.css";

export type MarvmemesType = {
  className?: string;
};

const Marvmemes: FunctionComponent<MarvmemesType> = ({ className = "" }) => {


  return (
    <section className={[styles.mainwrapper, className].join(" ")} id="marv-memes"  data-scroll-to="marv-memes">
      <div className={[styles.subwrapper, className].join(" ")}>
        <img
          className={[styles.marv_posing, className].join(" ")}
          loading="lazy"
          alt=""
          src={"/marv-posing.gif"}
        />
        <img
          className={[styles.marv_cameraman, className].join(" ")}
          loading="lazy"
          alt=""
          src={"/marv-cameraman.gif"}
        />
        <div className={[styles.title, className].join(" ")}>MARV PFP GALLERY</div>
        <div className={[styles.componentbody, className].join(" ")}>
          <Framecontainer className={className} marvmirror={false} color="linear-gradient(#FD8A8A, #AD5B5B)" image="/marvmemes/1.png" rotation="2deg"></Framecontainer>
          <Framecontainer className={className} marvmirror={false}  color="linear-gradient(#F9B889, #926546)" image="/marvmemes/2.png" rotation="2deg"></Framecontainer>
          <Framecontainer className={className} marvmirror={true} color="linear-gradient(#58A098, #69C6BA)" image="/marvmemes/3.png" rotation="-2deg"></Framecontainer>
          <Framecontainer className={className} marvmirror={false} color="linear-gradient(#AC9CDB, #7462A6)" image="/marvmemes/4.png" rotation="2deg"></Framecontainer>
          <Framecontainer className={className} marvmirror={false} color="linear-gradient(#FD8A8A, #AD5B5B)" image="/marvmemes/5.png" rotation="2deg"></Framecontainer>
          <Framecontainer className={className} marvmirror={true} color="linear-gradient(#F9B889, #926546)" image="/marvmemes/6.png" rotation="-2deg"></Framecontainer>
          <Framecontainer className={className} marvmirror={false} color="linear-gradient(#58A098, #69C6BA)" image="/marvmemes/7.png" rotation="2deg"></Framecontainer>
          <Framecontainer className={className} marvmirror={true} color="linear-gradient(#AC9CDB, #7462A6)" image="/marvmemes/8.png" rotation="-2deg"></Framecontainer>
          <Framecontainer className={className} marvmirror={false} color="linear-gradient(#AC9CDB, #7462A6)" image="/marvmemes/9.png" rotation="2deg"></Framecontainer>
        </div>
      </div>
    </section>
  );
};

const Framecontainer=(props:{className:string,marvmirror:boolean,image:string,rotation:string,color:string})=>{

  const download=()=>{

  }

  return(
    <div className={[styles.frame, props.className].join(" ")} style={{borderTopLeftRadius:"10px",borderBottomRightRadius:"10px"}}>
      {/* <div style={{position:"absolute",width:"100%",height:"100%",backgroundColor:"white",borderTopLeftRadius:"20px"}}></div> */}
      <img
        className={[styles.frameimage, props.className].join(" ")}
        loading="lazy"
        alt=""
        src={props.image}
      />
      <a className={[styles.marvfacewrapper, props.className].join(" ")} href={props.image} download={"Marv"}>
        <p className={styles.download}>Download</p>
        <img
          className={styles.marvface}
          loading="lazy"
          alt=""
          src="/marv-face2.png"
          // style={{transform:"scaleX("+(props.marvmirror?-1:1)+")"}}
        />
      </a>
      {/* <div style={{height:"85%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center"}}>
        <p className={[styles.frametitle, props.className].join(" ")}>{props.title}</p>
        <p className={[styles.framesubtitle, props.className].join(" ")}>{props.subTitle}</p>
      </div> */}
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
