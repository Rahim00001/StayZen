import hotel from "../../../../public/hotel.jpg"
import hotel1 from "../../../../public/hotel1.jpg"
import hotel2 from "../../../../public/hotel2.jpg"
import hotel3 from "../../../../public/hotel3.jpg"
import hotel4 from "../../../../public/hotel4.jpg"
import hotel5 from "../../../../public/hotel5.jpg"
import hotel6 from "../../../../public/hotel6.jpg"
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaArrowLeftLong } from "react-icons/fa6";
// // import { BsArrowRightSquare } from "react-icons/bs";
// // import { BsArrowLeftSquare } from "react-icons/bs";
const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[650px]">
            <div id="slide1" className="carousel-item relative w-full bg-black">
                <img src={hotel} className="w-full" />
                <div className="absolute h-full flex px-20 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-5 left-0 top-0 w-full">
                    <div className="space-y-7 w-1/3">
                        <h1 className="text-7xl text-white font-bold">Enjoy stunning views of the city skyline.</h1>
                        <p className="text-white mt-3 mb-5">Discover our Award-Winning Accomondation. <br />Enjoy fine Dining Exciting and Stunning Scenery.Serving a Variety of Local and International cuisine.</p>
                        <button className="btn btn-warning mr-5">Book Now</button>
                        <button className="btn btn-outline btn-primary">All Rooms</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn bg-black text-white hover:text-black">❮</a>
                    <a href="#slide2" className="btn bg-red-600 text-white hover:text-black">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={hotel1} className="w-full" />
                <div className="absolute h-full flex px-20 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-5 left-0 top-0 w-full">
                    <div className="space-y-7 w-1/3">
                        <h1 className="text-7xl text-white font-bold">Start planing your next luxurious escape today.</h1>
                        <p className="text-white mt-3 mb-5">Discover our Award-Winning Accomondation. <br />Enjoy fine Dining Exciting and Stunning Scenery.Serving a Variety of Local and International cuisine.</p>
                        <button className="btn btn-warning mr-5">Book Now</button>
                        <button className="btn btn-outline btn-primary">All Rooms</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn bg-black text-white hover:text-black">❮</a>
                    <a href="#slide3" className="btn bg-red-600 text-white hover:text-black">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={hotel2} className="w-full" />
                <div className="absolute h-full flex px-20 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-5 left-0 top-0 w-full">
                    <div className="space-y-7 w-1/3">
                        <h1 className="text-7xl text-white font-bold">Enjoy stunning views of the city skyline.</h1>
                        <p className="text-white mt-3 mb-5">Discover our Award-Winning Accomondation. <br />Enjoy fine Dining Exciting and Stunning Scenery.Serving a Variety of Local and International cuisine.</p>
                        <button className="btn btn-warning mr-5">Book Now</button>
                        <button className="btn btn-outline btn-primary">All Rooms</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn bg-black text-white hover:text-black">❮</a>
                    <a href="#slide4" className="btn bg-red-600 text-white hover:text-black">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={hotel4} className="w-full" />
                <div className="absolute h-full flex px-20 items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] gap-5 left-0 top-0 w-full">
                    <div className="space-y-7 w-1/3">
                        <h1 className="text-7xl text-white font-bold">Experiance the comfort at our elegant hotel.</h1>
                        <p className="text-white mt-3 mb-5">Discover our Award-Winning Accomondation. <br />Enjoy fine Dining Exciting and Stunning Scenery.Serving a Variety of Local and International cuisine.</p>
                        <button className="btn btn-warning mr-5">Book Now</button>
                        <button className="btn btn-outline btn-primary">All Rooms</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn bg-black text-white hover:text-black">❮</a>
                    <a href="#slide1" className="btn bg-red-600 text-white hover:text-black">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;