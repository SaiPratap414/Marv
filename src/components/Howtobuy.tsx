import { FunctionComponent, useEffect, useState } from "react";
import styles from "./Howtobuy.module.css";

export type HowtobuyType = {
  className?: string;
};

const Howtobuy: FunctionComponent<HowtobuyType> = ({ className = "" }) => {

  const [windowDim,setWindowDim]=useState({width:0,height:0})

  useEffect(()=>{
    setWindowDim({width:window.innerWidth,height:window.innerHeight})
  },[])

  return (
    <section className={[styles.mainwrapper, className].join(" ")} id="how-to-buy" data-scroll-to="how-to-buy">
      <div className={[styles.subwrapper, className].join(" ")}>
        <img
          className={[styles.marvimagetop, className].join(" ")}
          loading="lazy"
          alt=""
          src="/marv-whiteborder.png"
        />
        <img
          className={[styles.marvimagebottom, className].join(" ")}
          loading="lazy"
          alt=""
          src="/marv-whiteborder.png"
        />
        <div className={[styles.title, className].join(" ")}>How To Buy</div>
        <div className={[styles.componentbody, className].join(" ")}>
          <Framecontainer className={className} color="linear-gradient(#FD8A8A, #AD5B5B)" footerimage="/how-to-buy/1.png" image="/buy1-1@2x.png" title="Download Phantom Extension" subTitle="Download and install ​phantom on the ​appstore, or,​alternatively if ​you’re on desktop ​download and install ​thebrowser ​extension."></Framecontainer>
          <Framecontainer className={className} color="linear-gradient(#F9B889, #926546)" footerimage="/how-to-buy/2.png" image="/buy_2.png" title="Secure your SOL" subTitle="you can buy ​$sol from any ​exchange and ​even on ​phantom ​wallet"></Framecontainer>
          <Framecontainer className={className} color="linear-gradient(#58A098, #69C6BA)" footerimage="/how-to-buy/3.png" image="/buy_3.png" title="Buy some $Marv" subTitle="Now go to ​Raydium and paste ​the $MARV ​Contract Address ​to swap your SOL."></Framecontainer>
          <Framecontainer className={className} color="linear-gradient(#AC9CDB, #7462A6)" footerimage="/how-to-buy/4.png" image="/buy_4.png" title="Add to Your Wallet" subTitle="Now you’re all set! ​Welcome aboard the ​next rocket to the ​moon, just import the ​contract address to ​view you’re holdings ​and you can track ​your earnings."></Framecontainer>
        </div>
      </div>
    </section>
  );
};

const Framecontainer=(props:{className:string,footerimage:string,image:string,title:string,subTitle:string,color:string})=>{

  return(
    <div className={[styles.frame, props.className].join(" ")} style={{backgroundImage:props.color}}>
      <img
        style={{width:"auto",height:"50px",alignSelf:"center",transform:"translateY(-25px)"}}
        loading="lazy"
        alt=""
        src={props.image}
      />
      <div style={{height:"85%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center"}}>
        <p className={[styles.frametitle, props.className].join(" ")}>{props.title}</p>
        <p className={[styles.framesubtitle, props.className].join(" ")}>{props.subTitle}</p>
      </div>
      {/* <div className={[styles.framefooter, props.className].join(" ")}>
        <img
          style={{width:"auto",height:"100%",alignSelf:"center"}}
          loading="lazy"
          alt=""
          src={props.footerimage}
        />
      </div> */}
    </div>
  )
}

export default Howtobuy;


{/* <section style={{width:"100%",height:"100vh",maxHeight:"700px",minHeight:"650px",display:"flex",gap:"10%"}} className={[styles.howtobuy, className].join(" ")} data-scroll-to="HowToBuy">
  <div style={{width:"100%",maxWidth:"1440px",height:"100%",display:"flex",flexDirection:"column",alignItems:'center',justifyContent:'center'}} className={styles.howToBuy}>
    <div className={styles.howToBuy1}>HOW TO BUY</div>
    <div className={styles.buyingSteps}>
      <div className={styles.downloadPhantomExtension}>
        <img className={styles.groupIcon} alt="" src="/group-2.svg" />
        <div className={styles.instructionDetails}>
          <div className={styles.buyInstruction}>
            <img className={styles.groupIcon1} alt="" src="/group-3.svg" />
            <img className={styles.buy11Icon} alt="" src="/buy1-1@2x.png" />
          </div>
        </div>
        <div className={styles.phantomDownloadInstructionParent}>
          <div className={styles.phantomDownloadInstruction}>
            <div className={styles.downloadPhantomExtension1}>
              Download PHANTOM ​Extension
            </div>
          </div>
          <div className={styles.downloadAndInstall}>
            Download and install ​phantom on the ​appstore, or,
            ​alternatively if ​you’re on desktop ​download and install ​the
            browser ​extension.
          </div>
        </div>
      </div>
      <div className={styles.secureYourSolWrapper}>
        <div className={styles.secureYourSol}>
          <div className={styles.group}>
            <div className={styles.group1}>
              <div className={styles.rectangle} />
              <img
                className={styles.groupIcon2}
                alt=""
                src="/group-4.svg"
              />
            </div>
            <img className={styles.groupIcon3} alt="" src="/group-5.svg" />
          </div>
          <div className={styles.secureSolDescription}>
            <a className={styles.secureYourSolContainer}>
              <p className={styles.secureYour}>Secure your</p>
              <p className={styles.sol}>SOL</p>
            </a>
            <div className={styles.secureSolExplanation}>
              <div className={styles.youCanBuy}>
                you can buy ​$sol from any ​exchange and ​even on ​phantom
                ​wallet
              </div>
            </div>
          </div>
          <div className={styles.secureSolIcon}>
            <img
              className={styles.groupIcon4}
              loading="lazy"
              alt=""
              src="/group-6.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.buySomeFloppy}>
        <div className={styles.group2}>
          <div className={styles.rectangle1} />
          <img className={styles.groupIcon5} alt="" src="/group-7.svg" />
        </div>
        <div className={styles.group3}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.buySomeMarvWrapper}>
            <div className={styles.buySomeMarvContainer}>
              <p className={styles.buySome}>Buy some</p>
              <p className={styles.marv}>​$MARV</p>
            </div>
          </div>
          <div className={styles.nowGoTo}>
            Now go to ​Raydium and paste ​the $MARV ​Contract Address ​to
            swap your SOL.
          </div>
          <img
            className={styles.groupIcon6}
            loading="lazy"
            alt=""
            src="/group-8.svg"
          />
        </div>
      </div>
      <div className={styles.addToYourWalletWrapper}>
        <div className={styles.addToYourWallet}>
          <div className={styles.group4}>
            <div className={styles.group5}>
              <div className={styles.rectangle2} />
              <img
                className={styles.groupIcon7}
                alt=""
                src="/group-9.svg"
              />
            </div>
          </div>
          <div className={styles.group6}>
            <img className={styles.groupIcon8} alt="" src="/group-10.svg" />
            <div className={styles.addToWalletTitle}>
              <div className={styles.addToYourContainer}>
                <p className={styles.addToYour}>Add to Your</p>
                <p className={styles.wallet}>​Wallet</p>
              </div>
            </div>
            <div className={styles.nowYoureAll}>
              Now you’re all set! ​Welcome aboard the ​next rocket to the
              ​moon, just import the ​contract address to ​view you’re
              holdings ​and you can track ​your earnings.
            </div>
            <img className={styles.groupIcon9} alt="" src="/group-11.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}