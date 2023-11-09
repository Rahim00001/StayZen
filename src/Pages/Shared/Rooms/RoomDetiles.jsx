import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const RoomDetiles = () => {
    const room = useLoaderData();
    console.log(room);
    const { _id, img, price, bed_size, description, name, person, size, view } = room
    return (
        <div>
            <Helmet>
                <title>Room Detiles: {name}</title>
            </Helmet>
            <div className="flex flex-col lg:flex-row gap-5 items-center w-10/12 mx-auto mb-5">
                <div className="lg:w-1/2">
                    <img className="rounded" src={img} alt="" />
                </div>
                <div className="lg:w-1/2">
                    <div>
                        <h2 className="text-4xl font-semibold italic mb-3">{name}</h2>
                        <h2 className="text-lg font-medium">{`Size: ${size}`}</h2>
                        <h2 className="text-lg font-medium">{`View: ${view}`}</h2>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-lg font-medium">{`Adults: ${person}`}</h2>
                        <h2 className="text-lg font-medium">{`Bed Size: ${bed_size}`}</h2>
                        <h2 className="text-lg font-medium">{`Price: ${price}$ per night`}</h2>
                    </div>
                    <div>
                        <p className="font-semibold leading-7">{`More Info: ${description}`}</p>
                    </div>
                    <Link to={`/booking/${_id}`}>
                        <button className="btn btn-neutral mt-5">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomDetiles;