
import {App} from "./components/App/App"
import { ErrorElement } from "./components/ErrorElement/ErrorElement"
import { Home } from "./components/Home/Home"
const routes = [
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorElement/>,
        children:[
            {index:true,element:<Home/>},
        ]
    }



]

export default routes