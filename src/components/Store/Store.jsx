import styles from "./Store.module.css"
import { StoreSidebar } from "../StoreSidebar/StoreSidebar"
import { StoreContent } from "../StoreContent/StoreContent"
import { useOutletContext } from "react-router"
function Store(){
    const [,,resultFruits,resultFilters,handleCancelFilter,,,,search] = useOutletContext()
    return(
        <div className={styles.wrapper}>
            <StoreSidebar/>
            <StoreContent  resultFruits={resultFruits} resultFilters={resultFilters} handleCancelFilter={handleCancelFilter} search={search}/>
        </div>
    )
}

export {Store}