import styles from "./CartHoverItem.module.css"

function CartHoverItem({item,handleRemoveCart}){
    return(
        <div className={styles.wrapper}>
            <img src={item.fruit.url} className={styles.img}></img>
            <div className={styles.info}>
                <div className={styles.name}>{item.fruit.name}</div>
                <div className={styles.family}>{item.fruit.family}</div>
                <div className={styles.quantity}>{`Qty.` + item.quantity}</div>
            </div>
            <div className={styles.trashButton} onClick={()=>handleRemoveCart(item.fruit)}>
                <img className={styles.trashIcon}    src="/trashIcon.png"></img>
            </div>
            <div className={styles.price}>{"$"+item.quantity*item.fruit.price}</div>
        </div>
    )
}

export {CartHoverItem}