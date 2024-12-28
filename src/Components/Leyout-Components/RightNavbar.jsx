import FindUs from "../FindUs/FindUs";
import Qzone from "../Qzone/Qzone";
import SocialLogin from "../SocialLogin/SocialLogin";

const RightNavbar = () => {
    return (
        <div>
            <h1>
                <SocialLogin></SocialLogin>
                <FindUs></FindUs>
                <Qzone></Qzone>
            </h1>
        </div>
    );
};

export default RightNavbar;