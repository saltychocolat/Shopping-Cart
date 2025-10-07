import { useState } from "react";
import styles from "./Header.module.css"
import { useNavigate } from 'react-router';
import { CartHover } from "../CartHover/CartHover";


function Header({cart,handleSearch,handleRemoveCart}){
    const [cartHover,setHover] = useState(false)
    const navigate = useNavigate();
    const handleNavigate = (dest) =>{
        navigate(dest)
    }

    return(
        <>  
            <CartHover cart={cart} toggle={cartHover} handleRemoveCart={handleRemoveCart}/>
            <div className={styles.wrapper} data-testid="app-header">
                <div className={styles.title} onClick={()=> handleNavigate("/")}>store.</div>
                <div className={styles.link} onClick={()=> handleNavigate("/")}>Home</div>
                <div className={styles.link} onClick={()=> handleNavigate("/store")}>Store</div>
                <img className={styles.searchIcon} src="/searchIcon.png"></img>
                <input type="text" className={styles.input} onChange={(event)=>handleSearch(event.target.value)} data-testid="header-search"></input>
                <div className={styles.count}>{cart.length?cart.length:0}</div>
                <img className={styles.cartIcon} src="/cartIcon.png" onClick={()=> handleNavigate("/cart")} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setTimeout(()=>setHover(false),100)}></img>
            </div>
        </>

    )
}

export {Header}