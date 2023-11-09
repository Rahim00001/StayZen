import { useLoaderData } from "react-router-dom";
import bookingImg from "../../../public/onlineBooking.jpg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";


const Booking = () => {
    const bookings = useLoaderData();
    const { name, price, img, _id } = bookings;
    const { user } = useContext(AuthContext);
    console.log(bookings);

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const number = form.number.value;
        const cheakIn = form.cheakIn.value;
        const cheakOut = form.cheakOut.value;
        const booking = {
            email,
            number,
            cheakIn,
            cheakOut,
            price,
            img,
            room_name: name,
            room_id: _id
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Congratulation",
                        text: "Your Room Booking Confirmed",
                        icon: "success"
                    });

                }
            })

    }

    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center w-10/12 mx-auto lg:h-[85vh]">
                <img src={bookingImg} alt="bookingImg" className="lg:w-1/2" />
                <form onSubmit={handleBooking} className="card-body lg:w-1/2">
                    <h2 className="text-4xl font-semibold italic mb-5">Booking For: {name}</h2>
                    <div className="flex flex-col md:flex-row w-full justify-between gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Contact Number</span>
                            </label>
                            <input type="text" name="number" placeholder="Number" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full justify-between gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">CheakIn</span>
                            </label>
                            <input type="date" name="cheakIn" placeholder="CheakIn Date" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">CheakOut</span>
                            </label>
                            <input type="date" name="cheakOut" placeholder="ChaekOut date" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-warning font-extrabold" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;