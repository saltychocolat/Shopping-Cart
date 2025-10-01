import { useOutletContext } from "react-router"
import styles from "./StoreContent.module.css"
import { StoreItem } from "../../StoreItem/StoreItem"
import { FilterHeader } from "../FilterHeader/FilterHeader"

function StoreContent(){
    const [,,resultFruits,filters] = useOutletContext()
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>{`Items (${resultFruits.length})`}</div>
            {filters ? (
                <>
                <FilterHeader filters={filters}/>
                </>
            ):(
                <>
                </>
            )}
            <div className={styles.content}>
            {resultFruits.length !== 0 ? (
                resultFruits.map((item, index) => (
                <StoreItem key={index} item={item} />
                ))
            ) : (
                <div>No fruit match the current filters</div>
            )}
            </div>
        </div>
    )
}

export {StoreContent}