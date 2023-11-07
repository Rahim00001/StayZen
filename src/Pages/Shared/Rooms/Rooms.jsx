import { useEffect, useState } from "react";
import Room from "./Room";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    console.log(rooms);
    return (
        <div className="w-10/12 mx-auto">
            <div className="text-center">
                <h1>Available Rooms</h1>
                <h2>Find our best rooms</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    rooms.map(room => <Room key={room.id} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;