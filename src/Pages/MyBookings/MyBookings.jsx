import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [mybookings, setMybookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMybookings(data)
            })
    }, [])
    return (
        <div>
            <h1 className="text-center text-5xl font-bold italic mb-5">My Bookings: {mybookings.length}</h1>
        </div>
    );
};

export default MyBookings;