import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";

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
            }
        ]
    },
]);

export default router;