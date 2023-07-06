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
                path: 'addToy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
            },
            {
                path: 'addedToys/:id',
                element: <AddedToys></AddedToys>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'allMyToys',
                element: <PrivateRoute><AllMyToys></AllMyToys></PrivateRoute>
            },
        ]
    }
]);

export default router;