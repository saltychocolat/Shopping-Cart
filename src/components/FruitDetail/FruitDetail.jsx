import { useLocation } from "react-router"

function FruitDetail(){
    const location = useLocation();
    const fruit = location.state
    return(
        <p>{fruit.name}</p>
    )
}

export {FruitDetail}