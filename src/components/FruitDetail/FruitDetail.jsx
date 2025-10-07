import { useState } from "react";
import styles from "./FruitDetail.module.css"
import { useLocation, useNavigate, useOutletContext } from "react-router"

function FruitDetail(){
    const [fruits,handleSectionClick,resultFruits,resultFilters,handleCancelFilter,cart,handleAddCart,handleRemoveCart] = useOutletContext();
    const [quantity,setQuantity] = useState(1)

    const navigate = useNavigate()
    const location = useLocation();
    const fruit = location.state
    return(
        <div className={styles.wrapper}>
            <div >
                <img className={styles.backIcon} src="/backIcon.png" onClick={()=>navigate(-1)}></img>

            </div>
            <div className={styles.fruitDetailsContainer}>
                <img className={styles.img} src={fruit.url}></img>
                <div className={styles.fruitInfo}>
                    <div className={styles.infoHeader}>{fruit.name}</div>
                    <div className={styles.infoFamily}>{fruit.family +" Family"}</div>
                    <div className={styles.infoStock}>In Stock</div>
                    <div className={styles.infoPrice}>{"$"+fruit.price * quantity}</div>
                    <div className={styles.infoQuantity}>
                        <button className={styles.modifier} onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : prev))}>-</button>
                        <div>{quantity}</div>
                        <button className={styles.modifier} onClick={()=>setQuantity((prev)=>++prev)}>+</button>
                    </div>
                    <div className={styles.infoBio}>{fruit.bio}</div>
                    <div className={styles.buyButton}>Buy Now</div>
                    {cart.some(item=>item.fruit == fruit)?(
                        <>
                            <div className={styles.addButton} onClick={()=>handleRemoveCart(fruit)}>
                                <img className={styles.bagIcon} src="/bagIcon.png"></img>
                                <div>Remove from bag</div>
                            </div>
                        </>
                    ):
                    (
                        <div className={styles.addButton} onClick={()=>handleAddCart(fruit,quantity)}>
                            <img className={styles.bagIcon} src="/bagIcon.png"></img>
                            <div>Add to bag</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export {FruitDetail}