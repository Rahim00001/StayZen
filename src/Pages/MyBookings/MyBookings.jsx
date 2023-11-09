import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingTable from "./BookingTable";

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
            <div className="overflow-x-auto">
                <table className="table ml-5">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Room Info</th>
                            <th>Contact Info</th>
                            <th>Date</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mybookings.map(booking => <BookingTable key={booking._id} booking={booking}></BookingTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;