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
    <section style={{width:"100%",height:"100vh",maxHeight:"700px",minHeight:"650px",display:"flex",gap:"10%"}} className={[styles.howtobuy, className].join(" ")} data-scroll-to="HowToBuy">
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
    </section>
  );
};

export default Howtobuy;
