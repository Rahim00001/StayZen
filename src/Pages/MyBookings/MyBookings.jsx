import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingTable from "./BookingTable";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [mybookings, setMybookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {

        axios.get(url, { withCredentials: true })
            .then(res => {
                setMybookings(res.data)
            })
    }, [])

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your booking has been deleted.",
                                icon: "success"
                            });
                            const remaining = mybookings.filter(booking => booking._id !== id);
                            setMybookings(remaining);
                        }
                    })
            }
        });
    }


    return (
        <div>
            <Helmet>
                <title>StayZen | My Bookings</title>
            </Helmet>
            <h1 className="text-center text-5xl font-bold italic mb-5">My Bookings: {mybookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
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
                            mybookings.map(booking => <BookingTable
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                            ></BookingTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;