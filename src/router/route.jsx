import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import About from "../pages/About";
import BookDetail from "../pages/BookDetail";

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
            },
            {
                path : '/bookDetail/:id',
                element : <BookDetail/>
            }
        ]
    }
])

export default router;