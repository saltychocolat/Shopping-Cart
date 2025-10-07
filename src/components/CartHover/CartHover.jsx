
import styles from "./CartHover.module.css"
import { CartHoverItem } from "../CartHoverItem/CartHoverItem";
import { useNavigate } from "react-router";
import { useState } from "react";
function CartHover({cart,toggle,handleRemoveCart}){
    const [current,setCurrent] = useState()
    const navigate = useNavigate()
    let total=0;
    cart.forEach(item=>(
        total += item.quantity*item.fruit.price
    ))
    return(
        <div className={toggle || current ?styles.cartHover:styles.cartHover+ " "+styles.hidden} onMouseEnter={()=>setCurrent(true)} onMouseLeave={()=>setCurrent(false)}>
            <div className={styles.cartHoverTitle}>Shopping bag</div>
            {cart.length!=0?(
                <>
                    {
                        cart.map((item,key)=>(
                            <CartHoverItem item={item} key={key} handleRemoveCart={handleRemoveCart}/>
                        ))
                    }
                </>
            ):(
                <div className={styles.cartHoverEmpty}>Bag is empty</div>
            )}
            <div className={styles.cartHoverFooter}>
                <div className={styles.total}>Total</div>
                <div className={styles.tax}>(Incl TVA)</div>
                <div className={styles.cartHoverTotal}>{"$"+ (total*119/100).toFixed(1)}</div>
            </div>
            <div className={styles.checkoutButton} onClick={()=>alert("If this was a real page you would have been sent to the payment methods")}>Checkout</div>
            <div className={styles.bagButton} onClick={()=>navigate("/cart")}>
                <img  className={styles.bagIcon} src="/bagIcon.png"></img>
                See in bag
            </div>
        </div>
    )
}


export {CartHover}