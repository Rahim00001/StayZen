import hotel from "../../../public/hotel1.jpg"
const About = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-5 items-center">
            <div className="lg:w-1/2">
                <img className="rounded" src={hotel} alt="" />
            </div>
            <div className="lg:w-1/2">
                <h1 className="text-center text-4xl font-bold italic">StayZen</h1>
                <p className="text-center text-xl font-semibold mb-2">Providing best Hotel Service since 1992</p>

                <p>
                    Nestled in the heart of the vibrant city of Riverside, Harmony Heights Hotel offers a sanctuary of comfort and luxury for discerning travelers. Our prime location provides easy access to both the bustling city center and the serene riverside promenade, ensuring you experience the best of both worlds.
                    <br />
                    At Harmony Heights, we pride ourselves on delivering an exceptional guest experience. Our elegant rooms and suites are designed with your utmost comfort in mind, featuring plush bedding, modern amenities, and breathtaking views of the city skyline or the tranquil river</p>
            </div>
        </div>
    );
};

export default About;