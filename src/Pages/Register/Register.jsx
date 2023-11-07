import { Link } from "react-router-dom";
import registerImg from "../../../public/register.jpg"
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";
const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value
        const password = form.password.value;
        console.log(name, email, photo, password);

        // create User
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="hero min-h-[85vh]">
            <div className="hero-content flex-col lg:flex-row lg:gap-12">
                <div className="w-1/2">
                    <img src={registerImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-5xl font-bold text-center mb-5">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="REgister" className="btn bg-red-500 text-white" />
                        </div>
                        <p className="text-center my-4">Already Have An Account? <Link to='/login' className="text-red-600 font-bold">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;