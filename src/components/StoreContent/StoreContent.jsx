
import styles from "./StoreContent.module.css"
import { StoreItem } from "../StoreItem/StoreItem"
import { FilterHeader } from "../FilterHeader/FilterHeader"

function StoreContent({resultFruits,resultFilters,handleCancelFilter,search}){
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>{`Items (${resultFruits.length})`}</div>
            {resultFilters ? (
                <FilterHeader filters={resultFilters} handleCancelFilter={handleCancelFilter} search={search}/>
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
                <div className={styles.noFilter}>No fruit match the current filters</div>
            )}
            </div>
        </div>
    )
}

export {StoreContent}