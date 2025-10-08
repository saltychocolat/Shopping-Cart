import styles from "./StoreSidebar.module.css"
import { ColorSection } from "../ColorSection/ColorSection"
import { FamilySection } from "../FamilySection/FamilySection"

function StoreSidebar(){
    return(
        <div className={styles.wrapper}>
            <ColorSection/>
            <FamilySection/>
        </div>
    )
}

export {StoreSidebar}