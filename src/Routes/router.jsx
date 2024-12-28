import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLeyout from "../Leyout/homeLeyout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import CategoryNews from "../Components/Pages/categoryNews";
import AuthLeyout from "../Leyout/AuthLeyout/AuthLeyout";



const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLeyout></HomeLeyout>,
        children: [
            {
                path: '',
                element: <Navigate to='/category/01'></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            }
        ]
    },
    {
        path: '/news',
        element: <h1>News</h1>
    },
    {
        path: '/auth',
        element: <AuthLeyout></AuthLeyout>,
        children: [
            {
                path: '/auth/login',
                element: <h2>login section</h2>
            },
            {
                path: '/auth/register',
                element: <h2>Register section</h2>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;