import { useOutletContext } from "react-router"
import styles from "./ColorOption.module.css"


function ColorOption({item}){
    const [,handleSectionClick] = useOutletContext()
    return(
        <div className={styles.container} onClick={()=>handleSectionClick(item)}>
            <div className={styles.colorOrb} style={{backgroundColor:item}}></div>
            <div className={styles.colorName}>{item.charAt(0).toUpperCase() + item.slice(1)}</div>
        </div>
    )
}

export {ColorOption}