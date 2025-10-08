import { useState } from "react"
import styles from "./FamilyOption.module.css"
import { useOutletContext } from "react-router"


function FamilyOption({item}){
    const [,handleSectionClick,,resultFilters,handleCancelFilter] = useOutletContext()
    let current = resultFilters.includes(item)
    const [check,setCheck] = useState(resultFilters.includes(current))
    const handleClick = (item)=>{
        handleCheck()
        if(check)
            handleCancelFilter(item)
        else
            handleSectionClick(item)
    }
    const handleCheck = ()=>{
        setCheck((prev)=>!prev)
    }
    return(
        <div className={styles.container} onClick={()=>handleClick(item)}>
            <div className={check && current?styles.checkBox +" "+ styles.checked : styles.checkBox} >
                {check && current?(
                    <img src="/checkIcon.png" className={styles.checkIcon}/>
                ):
                (
                    <></>
                )}
            </div>
            {item}
        </div>
    )

}

export {FamilyOption}