import { useNavigate } from "react-router"
import styles from "./StoreItem.module.css"

function StoreItem({item}){
    let navigate = useNavigate()
    return(
        <div className={styles.itemWrapper} onClick={()=>navigate(`/store/${item.name}`,{state:item})} data-testid="store-item">
            <img className={styles.img} src={item.url}></img>
            <div className={styles.info}>
                <div className={styles.title}>{item.name}</div>
                <div className={styles.family}>{item.family}</div>
                <div className={styles.price}>
                    {"$"+item.price}
                    <img className={styles.bagIcon} src="/bagIcon.png"></img>
                </div>
            </div>
        </div>
    )
}

export {StoreItem}