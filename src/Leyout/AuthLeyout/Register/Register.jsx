import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
    const {CreatNewUser, UpdateProfile} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target);
        const name = form.get('name')
        if (name.length < 5) {
            toast.error("Name must be more than 5 characters!");
            return;
        }
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        if (password.length < 6) {
            toast.error("Password must be more than 5 characters!");
            return;
        }
        console.log({ name, photo, email, password })

        CreatNewUser(email, password)
        .then(result => {
            console.log(result.user)
            toast.success('Register Successful!');  
            UpdateProfile({ displayName: name, photoURL: photo })
            .then(() => {
              navigate("/");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch(error => {
            toast.error(error.message);
        });
        }
    return (
        
        <div className="min-h-screen flex justify-center items-center">
             <Toaster /> 
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-3xl font-bold pt-2 items-center justify-center flex">Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your Name"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="Enter your Photo URL"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="input input-bordered"
                            required />
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
                            required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="pb-3 text-center">Already Have an account! <Link className="font-semibold text-cyan-500" to='/auth/login'>Login Here</Link></p>
            </div>
        </div>
    );
};

export default Register;