import Rooms from "../../Shared/Rooms/Rooms";
import Banner from "../Banner/Banner";
import Location from "../Location/Location";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Rooms></Rooms>
            <Location></Location>
        </div>
    );
};

export default Home;