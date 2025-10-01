
import {App} from "./components/App/App"
import { ErrorElement } from "./components/ErrorElement/ErrorElement"
import { Home } from "./components/Home/Home"
import { Store } from "./components/Store/Store"

const routes = [
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorElement/>,
        children:[
            {index:true,element:<Home/>},
            {path:"/store",element:<Store/>}
        ]
    }



]

export default routes