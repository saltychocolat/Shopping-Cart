import styles from "./Filter.module.css"

function Filter({item,handleCancelFilter,search}){
    return(
        <div className={styles.filter}>{item==search?item:item.charAt(0).toUpperCase() + item.slice(1)}
            <img src="/cancelIcon.png" className={styles.cancelIcon} onClick={()=>handleCancelFilter(item)}></img>
        </div>
    )
}

export {Filter}