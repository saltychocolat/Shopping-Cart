import styles from "./ErrorElement.module.css"


function ErrorElement(){
    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Sorry for the error!
            </div>
            <p className={styles.p}>Please try refreshing the site or contacting a dev!</p>
            <p className={styles.p}>click for surprise :p</p>
        </div>
    )
}

export {ErrorElement}