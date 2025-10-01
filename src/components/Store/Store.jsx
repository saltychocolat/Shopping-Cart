import styles from "./Store.module.css"
import { StoreSidebar } from "../StoreSidebar/StoreSidebar"
import { StoreContent } from "../StoreContent/StoreContent"
function Store(){
    return(
        <div className={styles.wrapper}>
            <StoreSidebar/>
            <StoreContent/>
        </div>
    )
}

export {Store}