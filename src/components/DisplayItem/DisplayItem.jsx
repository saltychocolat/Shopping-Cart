import { useNavigate } from "react-router"
import styles from "./DisplayItem.module.css"

function DisplayItem({item}){
    const navigate = useNavigate()
    return(
        <div className={styles.container} onClick={()=>navigate(`/store/${item.name}`,{state:item})}>
            <img src={item.url} className={styles.img}/>
        </div>
    )
}

export {DisplayItem}