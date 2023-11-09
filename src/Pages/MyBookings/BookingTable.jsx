/* eslint-disable react/prop-types */

const BookingTable = ({ booking, handleDelete }) => {
    console.log(booking);
    const { room_name, price, number, img, email, cheakOut, cheakIn, _id } = booking;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12 md:w-24 md:h-16">
                            <img src={img} alt="Room Image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{room_name}</div>
                        <div className="text-sm">{`${price}$`}</div>
                    </div>
                </div>
            </td>
            <td>
                {number}
                <br />
                <span className="">{email}</span>
            </td>
            <td>
                {`CheakIn: ${cheakIn}`}
                <br />
                <span className="">{`CheakOut: ${cheakOut}`}</span>
            </td>
            <th>
                <button className="btn btn-primary btn-xs mb-2">Update</button>
                <br />
                <button onClick={() => handleDelete(_id)} className="btn btn-neutral btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default BookingTable;