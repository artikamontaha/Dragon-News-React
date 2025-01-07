import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {

    const { UserLogin, setUser } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);   
    const navigate = useNavigate() 



    const handleSubmit = (e) => {        
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });

        UserLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success('Login Successful!');  
                navigate(location?.state ? location?.state : '/')
            })
            .catch(error => {
                toast.error(error.code);  
            });
    };

    return (
        
        <>
            <Toaster /> 
            <div className="min-h-screen flex justify-center items-center">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className="text-3xl font-bold pt-2 items-center justify-center flex">Login Your Account</h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                name="email"
                                type="email" 
                                placeholder="Enter your email address" 
                                className="input input-bordered" 
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                name="password"
                                type="password" 
                                placeholder="Enter your password" 
                                className="input input-bordered" 
                                required 
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="pb-3 text-center">Don’t Have An Account? <Link className="font-semibold text-cyan-500" to='/auth/register'>Register Here</Link></p>
                </div>
            </div>
        </>
    );
};

export default Login;
