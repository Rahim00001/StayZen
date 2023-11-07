/* eslint-disable react/prop-types */

const Room = ({ room }) => {
    const { img, price, name, size } = room;
    return (
        <div className="border">
            <img src={img} className="h-[400px] w-full" alt="" />
            <div className="flex justify-between bg-slate-300">
                <div className="flex gap-5">
                    <p>{name}</p>
                    <p>{size}</p>
                </div>
                <div>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default Room;