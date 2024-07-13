import { FunctionComponent, useEffect, useState } from "react";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";
import styles from "./Marvnomics.module.css";

export type MarvnomicsType = {
  className?: string;
};

const Marvnomics: FunctionComponent<MarvnomicsType> = ({ className = "" }) => {

  return (
    <section className={[styles.mainwrapper, className].join(" ")} id="header">
      <div className={[styles.subwrapper, className].join(" ")}>
        <div className={[styles.title, className].join(" ")}>MARVNOMICS</div>
        <div className={[styles.body, className].join(" ")}>
          <div className={[styles.frameswrapper, className].join(" ")}>
            <div style={{display:"flex",flexDirection:"row"}}>
              <div className={[styles.frame, className].join(" ")}>
                <Framecontainer className={className} image={"/marv-web-new-set0005@2x.png"} title="Taxes" subTitle="0/0"></Framecontainer>
              </div>
              <div className={[styles.frame, className].join(" ")}>
                <Framecontainer className={className} image={"/marv-web-new-set0003@2x.png"} title="Freeze & Mint" subTitle="Revoke"></Framecontainer>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
              <div className={[styles.frame, className].join(" ")}>
                <Framecontainer className={className} image={"/marv-web-new-set0002@2x.png"} title="Total Supply" subTitle="100M"></Framecontainer>
              </div>
              <div className={[styles.frame, className].join(" ")}>
                <Framecontainer className={className} image={"/marv-web-new-set0004@2x.png"} title="Liquidity" subTitle="Burned"></Framecontainer>
              </div>
            </div>
          </div>
          <div className={[styles.description, className].join(" ")}>
            <p style={{margin:"10px"}}>
              Marv's journey in the Solana world is a testament to his unique
              approach to leadership. He continues to engage with his community,
              embracing their support and feedback. His dedication to
              decentralization and community growth remains at the heart of his
              reign, inspiring others to join him in creating a vibrant and
              inclusive ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Framecontainer=(props:{className:string,image:string,title:string,subTitle:string})=>{

  return(
    <div className={[styles.framewrapper, props.className].join(" ")}>
      <img
        style={{width:"auto",height:"70%"}}
        loading="lazy"
        alt=""
        src={props.image}
      />
      <div style={{height:"25%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <p className={[styles.frametitle, props.className].join(" ")}>{props.title}</p>
        <p className={[styles.framesubtitle, props.className].join(" ")}>{props.subTitle}</p>
      </div>
    </div>
  )
}

{/* <section style={{width:"100%",height:"100vh",maxHeight:"700px",minHeight:"650px",display:"flex",gap:"10%",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px"}} className={[styles.marvnomics, className].join(" ")} data-scroll-to="Marvnomics">
      <div style={{width:"100%",maxWidth:"1440px",height:"100%",padding:"75px",gap:"30px",display:"flex",flexDirection:"column"}}>
        <div style={{height:"30%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"15px"}}>
          <div className={styles.marvnomics1}>MARVNOMICS</div>
          <div style={{maxWidth:"75%",alignSelf:"center"}} className={styles.marvsJourneyIn}>
            Marv's journey in the Solana world is a testament to his unique
            approach to leadership. He continues to engage with his community,
            embracing their support and feedback. His dedication to
            decentralization and community growth remains at the heart of his
            reign, inspiring others to join him in creating a vibrant and
            inclusive ecosystem.
          </div>
        </div>
        <div style={{height:"65%",width:"100%",display:"flex",flexDirection:"row"}}>
          <div style={{width:'50%',height:"100%",display:"flex",flexDirection:"column",gap:"40px"}}>
            <div style={{width:'100%',height:"50%",display:"flex",flexDirection:"row",gap:"40px"}}>
              <Framecontainer image={"/marv-web-new-set0005@2x.png"}></Framecontainer>
              <Framecontainer image={"/marv-web-new-set0003@2x.png"}></Framecontainer>
            </div>
            <div style={{width:'100%',height:"50%",display:"flex",flexDirection:"row",gap:"40px"}}>
              <Framecontainer image={"/marv-web-new-set0002@2x.png"}></Framecontainer>
              <Framecontainer image={"/marv-web-new-set0004@2x.png"}></Framecontainer>
            </div>
          </div>
          <div style={{width:'50%',height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
            <img
            style={{width:"70%",height:"auto"}}
            loading="lazy"
            alt=""
            src="/marv-mems0001-1@2x.png"
          /></div>
        </div>
      </div>
    </section> */}

{/* <section className={[styles.marvnomics, className].join(" ")} data-scroll-to="Marvnomics">
  <div className={styles.conteTWrapper}>
    <div className={styles.conteT}>
      <div className={styles.marvnomics1}>MARVNOMICS</div>
      <div className={styles.marvsJourneyIn}>
        Marv's journey in the Solana world is a testament to his unique
        approach to leadership. He continues to engage with his community,
        embracing their support and feedback. His dedication to
        decentralization and community growth remains at the heart of his
        reign, inspiring others to join him in creating a vibrant and
        inclusive ecosystem.
      </div>
      <div className={styles.marvAndPolaImage}>
        <img
          className={styles.polaMarv0002Icon}
          loading="lazy"
          alt=""
          src="/pola-marv0002@2x.png"
        />
      </div>
      <div className={styles.firstPageImage}>
        <img
          className={styles.firstPage0005Icon}
          loading="lazy"
          alt=""
          src="/first-page-0005@2x.png"
        />
      </div>
    </div>
  </div>

  <div className={styles.choose}>
    <div className={styles.frameParent}>
      <FrameComponent2 marvWebNewSet0005="/marv-web-new-set0005@2x.png" />
      <FrameComponent1 marvWebNewSet0003="/marv-web-new-set0003@2x.png" />
      <div className={styles.marvWebNewSet0002Parent}>
        <img
          className={styles.marvWebNewSet0002}
          alt=""
          src="/marv-web-new-set0002@2x.png"
        />
        <div className={styles.liquidity}>Liquidity</div>
        <div className={styles.burned}>Burned</div>
      </div>
      <FrameComponent
        marvWebNewSet0004="/marv-web-new-set0004@2x.png"
        totalSupply="Total Supply"
        m="100M"
      />
    </div>
    <img
      className={styles.marvMems00011}
      alt=""
      src="/marv-mems0001-1@2x.png"
    />
  </div>

  <div className={styles.tokenomics}>
    <div className={styles.tokenomicsDetails}>
      <FrameComponent2
        marvWebNewSet0005="/marv-web-new-set0005-1@2x.png"
        propWidth="unset"
        propBackground="linear-gradient(44.45deg, #9945ff, #14f195 96.68%)"
      />
      <FrameComponent1
        marvWebNewSet0003="/marv-web-new-set0003-1@2x.png"
        propWidth="unset"
        propBackground="linear-gradient(44.45deg, #9945ff, #14f195 96.68%)"
      />
      <FrameComponent
        marvWebNewSet0004="/marv-web-new-set0002-1@2x.png"
        totalSupply="Liquidity"
        m="Burned"
        propWidth="unset"
        propBackground="linear-gradient(44.45deg, #9945ff, #14f195 96.68%)"
      />
      <FrameComponent
        marvWebNewSet0004="/marv-web-new-set0004-1@2x.png"
        totalSupply="Total Supply"
        m="100M"
        propWidth="unset"
        propBackground="linear-gradient(44.45deg, #9945ff, #14f195 96.68%)"
      />
    </div>
    <img
      className={styles.marvMems000111}
      loading="lazy"
      alt=""
      src="/marv-mems0001-1-1@2x.png"
    />
  </div>
</section> */}

export default Marvnomics;
