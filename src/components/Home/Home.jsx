import styles from "./Home.module.css"

function Home(){
    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Welcome to store.
            </div>
            <p className={styles.p}>Discover our selection of fresh store, bursting with store and store. Delivered straight from the store to your store.</p>
            <button className={styles.button}>Shop Now</button>
            <div className={styles.display}>
                
            </div>
        </div>
    )
}

export {Home}