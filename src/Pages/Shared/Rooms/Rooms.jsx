import { useEffect, useState } from "react";
import Room from "./Room";
import { Helmet } from "react-helmet-async";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, []);

    useEffect(() => {
        setRooms([...rooms.sort((a, b) => {
            return a.price - b.price
        })]);
    }, []);

    const handlesortByPrice = e => {
        e.stopPropagation();
        if (e.target.value === 'ascending') {
            setRooms([...rooms.sort((a, b) => {
                return a.price - b.price
            })]);
        }
        if (e.target.value === 'discending') {
            setRooms([...rooms.sort((a, b) => {
                return b.price - a.price
            })]);
        }
    }
    console.log(rooms);
    return (
        <div className="w-10/12 mx-auto">
            <Helmet>
                <title>StayZen | Rooms</title>
            </Helmet>
            <div className="flex border w-full justify-end">
                <div className="flex flex-col">
                    <h1 className="font-bold mb-1 text-lg">Filte By Room Price</h1>
                    <select className="border-black border-2 text-blue-900 font-semibold" onChange={(e) => handlesortByPrice(e)}>
                        <option value="ascending">Low To High</option>
                        <option value="discending">High To Low</option>
                    </select>
                </div>
            </div>
            <div className="text-center mb-5">
                <h1 className="text-5xl font-bold mb-2">Available Rooms</h1>
                <h2 className="text-lg italic font-medium">Find our best rooms</h2>
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