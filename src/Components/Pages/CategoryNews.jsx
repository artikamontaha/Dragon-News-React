import { useLoaderData } from "react-router-dom";
import SingleNewsCart from "../SingleNewsCart/SingleNewsCart";

const CategoryNews = () => {
    const { data: news } = useLoaderData();
    // console.log(news)

    return (
        <div>
            <h2 className="font-semibold p-5">Dragon News Home</h2>
            <h2 className="font-semibold p-5">{news.length} News found in this category</h2>

            <div>
                {
                    news.map(singelNews => <SingleNewsCart key={singelNews._id} news={singelNews}></SingleNewsCart>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;