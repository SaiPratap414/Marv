import styles from "./Navbar.module.css";

const Navbar=(props:{className:string,layout:"web"|"mobile"|"tab"})=>{
    return (
        <div className={[styles.mainwrapper, props.className].join(" ")}></div>
    )
}

export default Navbar