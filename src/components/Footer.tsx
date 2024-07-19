import { FunctionComponent, useCallback, useRef } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {

  const social=useRef([
    {title:"TikTok",url:""},
    {title:"Memes",url:""},
    {title:"Twitter",url:"https://x.com/Realmarv_Sol"},
    {title:"Telegram",url:"https://t.me/realmarv_sol"},
    {title:"Instagram",url:""}
  ]).current

  const onLinkContainerClick = useCallback(() => {
    window.open("https://twitter.com/");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://youtube.com/c/");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://t.me/");
  }, []);

  const onHomeButtonClick = useCallback(() => {
    document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className={[styles.mainwrapper, className].join(" ")} id="footer" data-scroll-to="footer">
      <div className={[styles.subwrapper, className].join(" ")}>
        <button onClick={()=>onHomeButtonClick()} className={[styles.gotohome, className].join(" ")}>
          <img
            className={[styles.gotohomeimg, className].join(" ")}
            loading="lazy"
            alt=""
            src="/marv-face.png"
          />
          Go To Home
        </button>
        {/* <div className={[styles.title, className].join(" ")}>Disclaimer</div> */}
        <div className={[styles.line, className].join(" ")}></div>
        <div className={[styles.body, className].join(" ")}>
          {/* <div className={[styles.description1wrapper, className].join(" ")}>
            <div className={[styles.description1, className].join(" ")}>Risk Disclousure</div>
            <div className={[styles.description1, className].join(" ")}>Legal Disclaimer</div>
          </div> */}
          <div className={[styles.description2wrapper, className].join(" ")}>
            <div className={[styles.buymarv, className].join(" ")}>Buy Marv</div>
            <div className={[styles.contractaddwrapper, className].join(" ")}>
              <input className={styles.contractadd} placeholder="Contract address... " type="text"/>
              <div className={[styles.copyiconwrapper, className].join(" ")}>
                <img style={{height:"100%",width:"auto"}} src="/icon-2.svg"></img>
              </div>
            </div>
          </div>
          <div className={[styles.description3wrapper, className].join(" ")}>
            <div style={{width:"33%",gap:"3%",display:"flex",flexDirection:"column"}}>
              <div className={[styles.marvtext, className].join(" ")}>MARV</div>
              <div className={[styles.jointext, className].join(" ")}>Join Marv at Marv Army</div>
              <div style={{ display: "flex", flexDirection: "row", gap: "5%" }}>
              <a href="https://x.com/Realmarv_Sol" target="_blank" rel="noopener noreferrer">
                <img
                  className={[styles.socialicons, className].join(" ")}
                  loading="lazy"
                  alt="Twitter"
                  src="/twitter.png"
                />
              </a>
              <a href="https://t.me/realmarv_sol" target="_blank" rel="noopener noreferrer">
                <img
                  className={[styles.socialicons, className].join(" ")}
                  loading="lazy"
                  alt="Telegram"
                  src="/telegram.png"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  className={[styles.socialicons, className].join(" ")}
                  loading="lazy"
                  alt="Dex"
                  src="/dex.png"
                />
              </a>
            </div>

            </div>
            {/* <div style={{width:"33%",display:"flex",flexDirection:"column",justifyContent:'start'}}>
              <div className={[styles.metricstitle, className].join(" ")}>Metrics</div>
              <div className={[styles.metricslist, className].join(" ")}>
                <div>CoinGecko</div>
                <div>Coinmarketcap</div>
                <div>Dextools</div>
              </div>
            </div> */}
            <div style={{width:"33%",display:"flex",flexDirection:"column",justifyContent:'start'}}>
              <div className={[styles.gopolatitle, className].join(" ")}>Go Marv!</div>
              <div className={[styles.gopolalist, className].join(" ")}>
                <div>Join Marvarmy</div>
                {
                  social.map((item)=>
                  <div><a onClick={()=>window.open(item.url)}>{item.title}</a></div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>     
  );
};

export default Footer;


