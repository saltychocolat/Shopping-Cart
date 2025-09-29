import styles from "./Header.module.css"
import { useNavigate } from 'react-router';

function Header({count = "0"}){
    const navigate = useNavigate();
    const handleNavigate = (dest) =>{
        navigate(dest)
    }
    return(
        <div className={styles.wrapper}>
            <div className={styles.title} onClick={()=> handleNavigate("/")}>store.</div>
            <div className={styles.link} onClick={()=> handleNavigate("/")}>Home</div>
            <div className={styles.link} onClick={()=> handleNavigate("/store")}>Store</div>
            <img className={styles.searchIcon} src="public/searchIcon.png"></img>
            <input type="text" className={styles.input}></input>
            <div className={styles.count}>{count}</div>
            <img className={styles.cartIcon} src="public/cartIcon.png" onClick={()=> handleNavigate("/cart")}></img>
        </div>
    )
}

export {Header}