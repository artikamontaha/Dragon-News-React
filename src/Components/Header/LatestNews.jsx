import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className=" flex gap-2 bg-gray-200 p-3">
           <button className="bg-[#D72050] text-base-100 px-3 py-1">Latest</button>
           <Marquee pauseOnHover={true}>
            <Link to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam voluptatem facere, modi natus rerum nam laboriosam doloremque ea veniam culpa ipsam maiores molestias distinctio voluptatibus recusandae in mollitia. Rerum, laudantium.</Link>
           </Marquee>
        </div>
    );
};

export default LatestNews;