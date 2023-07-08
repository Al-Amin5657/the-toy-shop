import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import AddedToys from "../Pages/AddedToys/AddedToys";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import AllMyToys from "../Pages/AllMyToys/AllMyToys";
import AllToys from "../Pages/Home/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import ToyDetails from "../Pages/AddedToys/AddedToys";
import Blog from "../Pages/Blog/Blog";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'logIn',
                element: <LogIn></LogIn>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'blogs',
                element: <Blog></Blog>
            },
            {
                path: 'addToy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
            },
            {
                path: 'addedToys/:id',
                element: <PrivateRoute><AddedToys></AddedToys></PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-toy-shop-server.vercel.app/products/${params.id}`)
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'allMyToys',
                element: <PrivateRoute><AllMyToys></AllMyToys></PrivateRoute>
            },
            {
                path: '*',
                element: <div>
                    <img className="mb-8" src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" alt="" />
                </div>
            }
        ]
    }
]);

export default router;