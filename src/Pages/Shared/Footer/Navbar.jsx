import { Link, NavLink } from "react-router-dom";
import stayZayn from "../../../../public/StayZen1.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/rooms'>Rooms</NavLink></li>
        <li><NavLink to='/blog'>My Bookings</NavLink></li>
    </>
    return (
        <nav className="max-w-7xl mx-auto">
            <div className="navbar bg-base-100 h-24 mb-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link to='/' className=""><img src={stayZayn} alt="logo" className="w-20 h-14 rounded-md" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ? <button onClick={handleLogOut} className="btn btn-neutral btn-outline mr-3">LogOut</button>
                            : <Link to="/login" className="btn btn-neutral btn-outline mr-3">Login</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;