import { useState } from "react"
import styles from "./ColorSection.module.css"
import { ColorOption } from "../ColorOption/ColorOption"

function ColorSection(){
    const colorList = ["red","green","orange","yellow","pink","black","blue","brown"]
    const [toggle,setToggle] = useState(false)

    const handleToggle = ()=>{
        setToggle((prev)=> !prev)
    }
    return(
        <div className={!toggle ? styles.wrapper : styles.wrapper + " "+ styles.open}>
            <div className={styles.sectionHeader} onClick={handleToggle}>
                <p>Color</p>
                <img className={!toggle ?styles.img : styles.img + " " +styles.open} src="/arrowIcon.png"></img>
            </div>
            <div className={styles.sectionContent}>
            {
                colorList.map((item,index) =>(
                    <ColorOption item={item} key={index}/>
                ))
            }
            </div>
        </div>
    )
}

export {ColorSection}