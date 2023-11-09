import { Helmet } from "react-helmet-async";
import Rooms from "../../Shared/Rooms/Rooms";
import Banner from "../Banner/Banner";
import Location from "../Location/Location";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>StayZen | Home</title>
            </Helmet>
            <Banner></Banner>
            <Rooms></Rooms>
            <Location></Location>
        </div>
    );
};

export default Home;