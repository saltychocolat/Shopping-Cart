import styles from "./StoreSidebar.module.css"
import { ColorSection } from "../ColorSection/ColorSection"

function StoreSidebar(){
    return(
        <div className={styles.wrapper}>
            <ColorSection/>
        </div>
    )
}

export {StoreSidebar}