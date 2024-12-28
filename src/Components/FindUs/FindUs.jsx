const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mt-10 mb-3">Find Us On</h2>
            <div className="join  flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start"><img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png" alt="" />Facebook</button>
                <button className="btn join-item justify-start"><img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="" />Twitter</button>
                <button className="btn join-item justify-start"><img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" />Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;