import { Link } from "react-router-dom";
import UserIcon from "../../assets/user.png"
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
const Navbar = () => {
    const { user,userLogout } = useContext(AuthContext)
    
    const handlelogout = () => {
       userLogout()
        .then(() => {
            toast.success('Log-Out Successful!');  
        })
        .catch(error => {
            toast.error(error.code);  
        });
    }
    return (
        <div className="flex justify-between">
        <div></div>
            <div className="space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>

            <div className="flex gap-2">
            <div className=" ">
          {user && user?.email ? (
            <div>
              <img className="w-10 rounded-full" src={user?.photoURL} referrerPolicy="no-referrer" alt="" />
              <p>{user.displayName}</p>
            </div>
          ) : (
            <img src={UserIcon} alt="" />
          )}
        </div>                {
                    user  ? <button onClick={handlelogout} className="w-[80px] btn bg-black text-white">LogOut</button> : <Link to='/auth/login' className="w-[80px] btn bg-black text-white">Login</Link>
                }


            </div>
        </div>
    );
};

export default Navbar;