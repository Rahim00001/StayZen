import offer1 from "../../../../public/offers1.jpg"
import offer2 from "../../../../public/offers2.png"
const Offer = () => {
    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-center text-5xl font-bold mt-10">Special Offers</h1>
            <div className="flex w-full mb-2 mt-10 items-center">
                <img src={offer1} alt="" className="w-1/2 max-h-96" />
                <div className="ml-2 w-1/2">
                    <h1 className="text-3xl font-bold ">Special Day Offer</h1>
                    <p className="text-lg font-medium mt-3">At StayZen Hotel, we believe that every milestone deserves to be celebrated in style. Whether it is an anniversary, birthday, or any other special occasion, we have curated an exclusive offer just for you!</p>
                </div>
            </div>
            <div className="flex flex-row-reverse items-center">
                <img src={offer2} alt="" className="w-1/2 max-h-96" />
                <div className="ml-2 w-1/2 mr-2">
                    <h1 className="text-3xl font-bold">Week Day Offer</h1>
                    <p className="text-lg font-medium mt-3">At StayZen Hotel, we believe that every milestone deserves to be celebrated in style. Whether it is an anniversary, birthday, or any other special occasion, we have curated an exclusive offer just for you!</p>
                </div>
            </div>
        </div>
    );
};

export default Offer;