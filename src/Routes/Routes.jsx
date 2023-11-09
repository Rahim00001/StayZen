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
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
            },
            {
                path: '/booking/:id',
                element: <Booking></Booking>,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            }

        ]
    },
]);

export default router;