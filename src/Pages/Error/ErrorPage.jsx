import { Link } from "react-router-dom";
import error from "../../../public/errorPage.jpg"
const ErrorPage = () => {
    return (
        <div className="relative">
            <img src={error} alt="Erro Img" className="w-[80] mx-auto h-screen relative" />
            <div className="w-full flex justify-center bottom-20 md:bottom-32 right-12 absolute">
                <Link to='/'><button className="btn btn-neutral absolute ">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;