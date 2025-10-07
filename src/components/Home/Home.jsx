import styles from "./Home.module.css"
import { useNavigate, useOutletContext } from "react-router"
import { DisplayItem } from "../DisplayItem/DisplayItem";

function Home(){
    const navigate = useNavigate();
    const handleNavigate = (dest) =>{
        navigate(dest)
    }
    let [fruits] = useOutletContext();
    return(
        <div className={styles.wrapper}>
            <div className={styles.title} data-testid="home-title">
                Welcome to store.
            </div>
            <p className={styles.p}>Discover our selection of fresh store, bursting with store and store. Delivered straight from the store to your store.</p>
            <button className={styles.button} onClick={()=>handleNavigate("/store")}>Shop Now</button>
            <div className={styles.display}>
                {
                    fruits.map((item,index) =>(
                        <DisplayItem item={item} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export {Home}