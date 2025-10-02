import styles from "./FilterHeader.module.css"
import { Filter } from "../Filter/Filter"
function FilterHeader({filters,handleCancelFilter}){
    return(
        <div className={styles.filterHeader}>
            {
                filters.map((item,index)=>(
                    <Filter item={item} key={index} handleCancelFilter={handleCancelFilter}/>
                ))
            }
        </div>
    )
}

export {FilterHeader}