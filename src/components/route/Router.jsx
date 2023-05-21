import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToys from "../Pages/AddToys/AddToys";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Profile from "../Pages/Profile/Profile";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
// import ToyCategory from "../Pages/ToyDetails/ToyCategory";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import PrivateRoute from "../UserAccessOnly/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: 'allToys',
                element: <AllToys />,
                loader: () => fetch('http://localhost:5001/totalToys')

            },
            {
                path: 'myToys',
                element: <MyToys />,
                loader: () => fetch('http://localhost:5001/allToys')
            },
            {
                path: 'addToys',
                element: <AddToys />
            },
            {
                path: 'blogs',
                element: <Blogs />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'toyDetails/:id',
                element: <PrivateRoute><ToyDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5001/allToys/${params.id}`)
            },
            {
                path: 'update/:id',
                element: <UpdateToy />,
                loader: ({ params }) => fetch(`http://localhost:5001/allToys/${params.id}`)
            },
            // {
            //     path: 'sub-category',
            //     element: <ToyCategory />
            // }

        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);

export default router;