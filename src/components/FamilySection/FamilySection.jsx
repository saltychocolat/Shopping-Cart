import { useState } from "react"
import styles from "./FamilySection.module.css"
import { FamilyOption } from "../FamilyOption/FamilyOption"

function FamilySection(){
    const familyList = ["Pome", "Tropical", "Citrus", "Berry"]
    const [toggle,setToggle] = useState(false)

    const handleToggle = ()=>{
        setToggle((prev)=> !prev)
    }
    return(
        <div className={!toggle ? styles.wrapper : styles.wrapper + " "+ styles.open}>
            <div className={styles.sectionHeader} onClick={handleToggle}>
                <p>Family</p>
                <img className={!toggle ?styles.img : styles.img + " " +styles.open} src="/arrowIcon.png"></img>
            </div>
            <div className={styles.sectionContent}>
            {
                familyList.map((item,index) =>(
                    <FamilyOption item={item} key={index}/>
                ))
            }
            </div>
        </div>
    )
}


export {FamilySection}