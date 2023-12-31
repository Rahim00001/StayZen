import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Rooms from "../Pages/Shared/Rooms/Rooms";
import RoomDetiles from "../Pages/Shared/Rooms/RoomDetiles";
import Booking from "../Pages/Booking/Booking";
import MyBookings from "../Pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";
import Update from "../Pages/MyBookings/Update";
import About from "../Pages/About/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            },
            {
                path: '/detiles/:id',
                element: <RoomDetiles></RoomDetiles>,
                loader: ({ params }) => fetch(`https://stay-zen-server-sigma.vercel.app/rooms/${params.id}`)
            },
            {
                path: '/booking/:id',
                element: <PrivateRoute><Booking></Booking></PrivateRoute>,
                loader: ({ params }) => fetch(`https://stay-zen-server-sigma.vercel.app/book/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/updateBooking/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://stay-zen-server-sigma.vercel.app/booking/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About>
            }

        ]
    },
]);

export default router;