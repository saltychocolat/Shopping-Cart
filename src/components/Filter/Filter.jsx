import styles from "./Filter.module.css"

function Filter({item,handleCancelFilter}){
    return(
        <div className={styles.filter}>{item}
            <img src="/cancelIcon.png" className={styles.cancelIcon} onClick={()=>handleCancelFilter(item)}></img>
        </div>
    )
}

export {Filter}