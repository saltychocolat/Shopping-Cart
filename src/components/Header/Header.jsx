import styles from "./Header.module.css"
import { useNavigate } from 'react-router';

function Header({count = "0",handleSearch}){
    const navigate = useNavigate();
    const handleNavigate = (dest) =>{
        navigate(dest)
    }
    return(
        <div className={styles.wrapper} data-testid="app-header">
            <div className={styles.title} onClick={()=> handleNavigate("/")}>store.</div>
            <div className={styles.link} onClick={()=> handleNavigate("/")}>Home</div>
            <div className={styles.link} onClick={()=> handleNavigate("/store")}>Store</div>
            <img className={styles.searchIcon} src="/searchIcon.png"></img>
            <input type="text" className={styles.input} onChange={(event)=>handleSearch(event.target.value)} data-testid="header-search"></input>
            <div className={styles.count}>{count}</div>
            <img className={styles.cartIcon} src="/cartIcon.png" onClick={()=> handleNavigate("/cart")}></img>
        </div>
    )
}

export {Header}