import { useNavigate, useOutletContext } from "react-router"
import styles from "./Cart.module.css"
import { CartItem } from "../CartItem/CartItem";

function Cart(){
    const navigate = useNavigate();
    const [,,,,,cart,handleAddCart,handleRemoveCart,] =useOutletContext();
    let price =0;
    let totalQ = 0;
    for(let i=0;i<cart.length;i++){
        price += cart[i].fruit.price * cart[i].quantity;
        totalQ += cart[i].quantity;
    }   
    return(
        <div className={styles.cartWrapper}>
            <img className={styles.backIcon} src="/backIcon.png" onClick={()=>navigate(-1)}></img>
            <div className={styles.title}>Shopping Bag</div>
            {
                cart.length==0?(
                    <div className={styles.empty}>Bag is empty.</div>
                ):( 
                    <div className={styles.cartItems}>
                        {
                        cart.map((item)=>(
                        <CartItem item={item} key={item.fruit.name} handleAddCart={handleAddCart} handleRemoveCart={handleRemoveCart}/>
                        ))
                        }
                    </div>
                    
                )
            }
            <div className={styles.cartInfo}>
                <div className={styles.cartTitle}>Order Summary</div>
                <div className={styles.cartPrice}>{"$" +price}</div>
                <div className={styles.cartGray}>{`Subtotal (${totalQ} items) `}
                    <div className={styles.margin}>{"$"+price }</div>
                </div>
                <div className={styles.cartGray}>{"TVA(20%)"}
                    <div className={styles.margin}>{"$" + (price*0.2).toFixed(1)}</div>
                </div>
                <div className={styles.cartTotal}>{`Total`}
                    <div className={styles.margin}>{'$' + (price*1.2).toFixed(1)}</div>
                </div>
                <div className={styles.checkoutButton} onClick={()=>alert("If this was a real page you would have been sent to payments 🥳🎈")}>{'Checkout'}</div>
            </div>
        </div>
    )
}

export {Cart}