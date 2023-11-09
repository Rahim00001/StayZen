import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../public/logIn1.jpg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";
const Login = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location?.state : '/')
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location?.state : '/')
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero min-h-[85vh]">
            <Helmet>
                <title>StayZen | Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-12">
                <div className="w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold text-center mb-5">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn bg-[#117cff] text-white mb-2" />
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary">Login With Google</button>
                        </div>
                        <p className="text-center my-4">New to StayZen ? <Link to='/register' className="text-[#117cff] font-bold hover:underline">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;