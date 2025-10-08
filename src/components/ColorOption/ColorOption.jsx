import { useOutletContext } from "react-router"
import styles from "./ColorOption.module.css"
import { useState } from "react"


function ColorOption({item}){
    const [,handleSectionClick,,resultFilters,handleCancelFilter,,,] = useOutletContext()
    let current = resultFilters.includes(item)
    const [check,setCheck] = useState(current)
    const handleClick = (item)=>{
        if(check)
            handleCancelFilter(item)
        else
            handleSectionClick(item)
        setCheck((prev) =>!prev)
    }
    return(
        <div className={styles.container} onClick={()=>handleClick(item)}>
            <div className={styles.colorOrb} style={{backgroundColor:item}}>
                {check && current?(
                <img src="/checkIcon.png" className={styles.checkIcon}/>
                ):
                (
                    <></>
                )}
            </div>
            <div className={styles.colorName}>{item.charAt(0).toUpperCase() + item.slice(1)}</div>
        </div>
    )
}

export {ColorOption}