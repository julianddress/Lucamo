import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import App from "./App";

export const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/signin', element: <SignIn/>},
    {path: '/signup', element: <SignUp/>},
])