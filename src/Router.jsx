import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Client/Home"
import Cart from "./pages/Client/Cart";
import SignIn from "./pages/Client/SignIn";
import SignUp from "./pages/Client/SignUp";
import ProtectedRoute from "./Components/Admin/protectedRoute";
import AdminSignIn from "./pages/Admin/AdminSigIn";
import Inicio from "./pages/Admin/Inicio";
import Statistics from "./pages/Admin/statistics";
import Sales from "./pages/Admin/sales";
import Products from "./pages/Client/ProductPage";
import Users from "./pages/Admin/users";
import Settings from "./pages/Admin/settings";
import NotFound from "./pages/404";
import App from "./App";

export const router = createBrowserRouter([

    // CLIENT
    { path: '/', element: <Home /> },
    { path: '/carrito/productos', element: <Cart /> },
    { path: '/lista-productos', element: <Products /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/signup', element: <SignUp /> },

    // ADMIN
    { path: '/Admin/SignIn', element: <ProtectedRoute> <AdminSignIn /> </ProtectedRoute> },
    { path: '/Admin/Inicio', element: <ProtectedRoute> <Inicio /> </ProtectedRoute> },
    { path: '/Admin/Estadisticas', element: <ProtectedRoute> <Statistics/> </ProtectedRoute>},
    { path: '/Admin/Ventas', element: <ProtectedRoute> <Sales/> </ProtectedRoute>},
    { path: '/Admin/Productos', element: <ProtectedRoute> <Products/> </ProtectedRoute> },
    { path: '/Admin/Usuarios', element: <ProtectedRoute> <Users/> </ProtectedRoute>},
    { path: '/Admin/Configuracion', element: <ProtectedRoute> <Settings/> </ProtectedRoute>},

    // GLOBAL
    { path: '*', element: <NotFound /> },
])