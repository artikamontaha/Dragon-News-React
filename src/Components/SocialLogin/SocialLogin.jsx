const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className="flex flex-col gap-5">
                <button className="btn"><img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" />Login With Google</button>
                <button className="btn"><img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png" alt="" />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;