import { Link } from "react-router-dom";
import registerImg from "../../../public/register.jpg"
import { AuthContext } from "../../providers/AuthProviders";
import { useContext, useState } from "react";
const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value
        const password = form.password.value;
        console.log(name, email, photo, password);

        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer.');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password Should have at least one uppercase characters');
            return
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            setRegisterError('Password Should have at least one special characters');
            return
        }

        // create User
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('Successfully Registerd')
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
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
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="register" className="btn bg-red-500 text-white" />
                        </div>
                        <p className="text-center my-4">Already Have An Account? <Link to='/login' className="text-red-600 font-bold">Login</Link></p>
                        {
                            registerError && <p className="text-red-600">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-600">{success}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;