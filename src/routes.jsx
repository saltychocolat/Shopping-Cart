
import {App} from "./components/App/App"
import { ErrorElement } from "./components/ErrorElement/ErrorElement"
import { Home } from "./components/Home/Home"
import { Store } from "./components/Store/Store"
import { FruitDetail } from "./components/FruitDetail/FruitDetail"
const routes = [
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorElement/>,
        children:[
            {index:true,element:<Home/>},
            {path:"/store",element:<Store/>}
        ]
    },
    {
        path:`/store/:fruit`,
        element:<FruitDetail/>,
        errorElement:<ErrorElement/>
    }



]

export default routes