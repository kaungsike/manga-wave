import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path: '/',
        element :  <Layout/>,
        errorElement : <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path : '/about',
                element : <About/>
            }
        ]
    }
])

export default router;