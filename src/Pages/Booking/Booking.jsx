import { useLoaderData } from "react-router-dom";
import bookingImg from "../../../public/onlineBooking.jpg"

const Booking = () => {
    const booking = useLoaderData();
    const { name, price } = booking;
    console.log(booking);
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center w-10/12 mx-auto h-[85vh]">
                <img src={bookingImg} alt="bookingImg" className="lg:w-1/2" />
                <form className="card-body lg:w-1/2">
                    <h2 className="text-4xl font-semibold italic mb-5">Booking For: {name}</h2>
                    <div className="flex w-full justify-between gap-5">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" defaultValue={price} required />
                        </div>
                    </div>
                    <div className="flex w-full justify-between gap-5">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">CheakIn</span>
                            </label>
                            <input type="date" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">CheakOut</span>
                            </label>
                            <input type="date" placeholder="password" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-warning font-extrabold">Book</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;