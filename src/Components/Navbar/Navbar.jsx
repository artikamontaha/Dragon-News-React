import { Link } from "react-router-dom";
import UserIcon from "../../assets/user.png"
const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div></div>
            <div className="space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className="flex gap-2">
                <img className="object-contain w-[50px] h-[50px] mr-3" src={UserIcon} alt="" />
                <Link to='/auth/login' className="w-[80px] btn bg-black text-white">Login</Link>

            </div>
        </div>
    );
};

export default Navbar;