import { Outlet } from "react-router-dom";

const AuthLeyout = () => {
    return (
        <div>
            <h1>OutLeyout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLeyout;