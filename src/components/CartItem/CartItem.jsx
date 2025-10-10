
import styles from "./CartItem.module.css"


function CartItem({item,handleAddCart,handleRemoveCart}){

    return(
        <div className={styles.item}>
            <img src={item.fruit.url} className={styles.img}></img>
            <div className={styles.fruitInfo}>
                <div className={styles.name}>{item.fruit.name}</div>
                <div className={styles.family}>{item.fruit.family + " Family"}</div>
                <div className={styles.stock}>{"In stock"}</div>
                <div className={styles.quantity}>{"Qty. "+ item.quantity}</div>
            </div>

            <div className={styles.infoQuantity}>
                    <button className={styles.modifier} onClick={() =>{item.quantity -1 >0? handleAddCart(item.fruit,--item.quantity): handleAddCart(item.fruit,0)}}>-</button>
                    <div>{item.quantity}</div>
                    <button className={styles.modifier} onClick={() => {handleAddCart(item.fruit,++item.quantity)}}>+</button>
            </div>
            <div className={styles.trashButton} onClick={()=>{handleRemoveCart(item.fruit)}} >
                <img className={styles.trashIcon}    src="/trashIcon.png"></img>
            </div>
            <div className={styles.price}>{"$" + item.fruit.price}</div>

        </div>
    )
}

export {CartItem};