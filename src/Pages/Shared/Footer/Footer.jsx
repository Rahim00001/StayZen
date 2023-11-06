import stayZen from "../../../../public/StayZen1.png"
import fb from "../../../../public/fb.png"
import youtube from "../../../../public/youtube.png"
import twitter from "../../../../public/twitter.png"
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-primary-content rounded">
            <aside>
                <img src={stayZen} className="w-20 rounded-xl" alt="" />
                <p className="font-bold">
                    StayZen Hotel Ltd. <br />Providing best Hotel Service since 1992
                </p>
                <p>Copyright © 2023 - All right reserved</p>
            </aside>
            <nav className="-mt-5">
                <div className="grid grid-flow-col gap-4">
                    <a><img src={fb} alt="" className="cursor-pointer" /></a>
                    <a><img src={youtube} alt="" className="cursor-pointer" /></a>
                    <a><img src={twitter} alt="" className="cursor-pointer" /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;