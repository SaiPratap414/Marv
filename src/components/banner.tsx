import styles from "./Navbar.module.css";

const Navbar=(props:{className:string,layout:"web"|"mobile"|"tab"})=>{
    return (
        <div style={{width:"100vw",maxWidth:"2000px",height:"auto"}}>
            <img style={{width:"100vw",maxWidth:"2000px",height:'auto'}} src="/banner.gif"></img>
        </div>
    )
}

export default Navbar