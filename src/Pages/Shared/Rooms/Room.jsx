/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Room = ({ room }) => {
    const { _id, img, price, name, size } = room;
    return (
        <div>
            <Link to={`/detiles/${_id}`}>
                <img src={img} className="h-[400px] w-full" alt="" />
            </Link>
            <div className="flex justify-between bg-slate-700 text-white py-5 px-2 rounded-b">
                <div className="flex gap-5 items-center">
                    <p className="text-2xl italic font-bold">{name}</p>
                    <p className="text-lg font-medium">{size}</p>
                </div>
                <div>
                    <p className="text-lg font-medium">{`${price}$ per night`}</p>
                </div>
            </div>
        </div>
    );
};

export default Room;