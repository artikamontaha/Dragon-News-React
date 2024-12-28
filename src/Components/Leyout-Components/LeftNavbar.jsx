import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [categoryes, setCategory] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategory(data.data.news_category))
    }, [])

    return (
        <div>
            <h2 className="font-semibold mb-4">All Caterogy</h2>
            <div className="flex flex-col">
                {
                    categoryes.map(category => <NavLink to={`/category/${category?.category_id}`} className="btn bg-white mb-5" key={category.category_id}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;