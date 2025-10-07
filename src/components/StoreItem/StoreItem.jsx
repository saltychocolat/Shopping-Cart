import { useNavigate, useOutletContext } from "react-router"
import styles from "./StoreItem.module.css"

function StoreItem({item}){
    const [,,,,,cart,handleAddCart,handleRemoveCart] = useOutletContext()
    let navigate = useNavigate()
    return(
        <div className={styles.itemWrapper} data-testid="store-item">
            <img className={styles.img} src={item.url} onClick={()=>navigate(`/store/${item.name}`,{state:item})} ></img>
            <div className={styles.info} >
                <div className={styles.title} onClick={()=>navigate(`/store/${item.name}`,{state:item})} >{item.name}</div>
                <div className={styles.family} onClick={()=>navigate(`/store/${item.name}`,{state:item})} >{item.family}</div>
                <div className={styles.price}>
                    {"$"+item.price}
                    {cart.some(temp=>temp.fruit.name == item.name)?(
                        <img className={styles.bagIcon} src="/blackbagIcon.png" onClick={()=>handleRemoveCart(item)}></img>
                    ):(
                        <img className={styles.bagIcon} src="/bagIcon.png" onClick={()=>handleAddCart(item,1)}></img>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export {StoreItem}