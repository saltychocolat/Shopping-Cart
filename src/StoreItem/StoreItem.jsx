import styles from "./StoreItem.module.css"

function StoreItem({item}){
    return(
        <div className={styles.itemWrapper}>
            <img className={styles.img} src={item.url}></img>
            <div className={styles.info}>
                <div className={styles.title}>{item.name}</div>
                <div className={styles.family}>{item.family}</div>
                <div className={styles.price}></div>
            </div>
        </div>
    )
}

export {StoreItem}