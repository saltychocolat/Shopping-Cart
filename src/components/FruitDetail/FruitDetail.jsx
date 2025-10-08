import { useState } from "react";
import styles from "./FruitDetail.module.css"
import { useLocation, useNavigate, useOutletContext } from "react-router"

function FruitDetail(){
    let pastel=
    {
    red: "rgb(255, 128, 128)",
    green: "rgb(128, 192, 128)",
    yellow: "rgb(255, 255, 128)",
    brown: "rgb(210, 148, 148)",
    orange: "#FFD0B4",
    purple: "rgb(192, 128, 192)",
    white: "rgb(255, 255, 255)"
    }
    const [,,,,,cart,handleAddCart,handleRemoveCart] = useOutletContext();
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
                    <div className={styles.buyButton} onClick={()=>navigate("/cart")}>Buy Now</div>
                    {cart.some(item=>item.fruit.name == fruit.name)?(
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
            <div className={styles.fruitFooter}>
                <div className={styles.footerColor} style={{backgroundColor:pastel[fruit.color[0]]}}>{fruit.color[0].charAt(0).toUpperCase()+fruit.color[0].slice(1)}</div>
                {fruit.vitamins.map((item)=>
                    <div className={styles.vitamins}>{item}</div>
                )}
            </div>
        </div>
    )
}

export {FruitDetail}