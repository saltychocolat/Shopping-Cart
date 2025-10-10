
import {App} from "./components/App/App"
import { ErrorElement } from "./components/ErrorElement/ErrorElement"
import { Home } from "./components/Home/Home"
import { Store } from "./components/Store/Store"
import { FruitDetail } from "./components/FruitDetail/FruitDetail"
import { Cart } from "./components/Cart/Cart"
const routes = [
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorElement/>,
        children:[
            {index:true,element:<Home/>},
            {path:"/store",element:<Store/>},
            {path:'/store/:fruit',element:<FruitDetail/>},
            {path:"/cart",element:<Cart/>},
        ]
    }



]

export default routes