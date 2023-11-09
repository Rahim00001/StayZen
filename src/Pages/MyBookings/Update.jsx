import { useLoaderData } from "react-router-dom";
import updateImg from "../../../public/update.jpg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Update = () => {
    const booking = useLoaderData();
    console.log(booking);
    const { room_name, price, img, _id, cheakIn, cheakOut, number } = booking;
    const { user } = useContext(AuthContext);

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const number = form.number.value;
        const cheakIn = form.cheakIn.value;
        const cheakOut = form.cheakOut.value;
        const updatedBooking = {
            email,
            number,
            cheakIn,
            cheakOut,
            price,
            img,
            room_name: name,
            room_id: _id
        }
        console.log(updatedBooking);

        fetch(`http://localhost:5000/booking/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Congratulation",
                        text: "Your Booking Updated Successfully",
                        icon: "success"
                    });

                }
            })

    }

    return (
        <div>
            <div>
                <div className="flex flex-col lg:flex-row items-center w-10/12 mx-auto lg:h-[85vh]">
                    <img src={updateImg} alt="bookingImg" className="lg:w-1/2" />
                    <form onSubmit={handleUpdate} className="card-body lg:w-1/2">
                        <h2 className="text-4xl font-semibold italic mb-5">Update Booking Of: {room_name}</h2>
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
                                <input type="text" name="number" placeholder="Number" defaultValue={number} className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row w-full justify-between gap-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">CheakIn</span>
                                </label>
                                <input type="date" name="cheakIn" placeholder="CheakIn" defaultValue={cheakIn} className="input input-bordered" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">CheakOut</span>
                                </label>
                                <input type="date" name="cheakOut" placeholder="CheakOut" defaultValue={cheakOut} className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-warning font-extrabold" value="Update Booking" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;