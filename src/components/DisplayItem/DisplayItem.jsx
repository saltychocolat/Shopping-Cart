import styles from "./DisplayItem.module.css"

function DisplayItem({item}){
    return(
        <div className={styles.container}>
            <img src={item.url} className={styles.img}/>
        </div>
    )
}

export {DisplayItem}