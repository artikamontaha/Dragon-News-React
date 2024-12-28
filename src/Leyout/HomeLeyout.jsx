import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import LatestNews from "../Components/Header/LatestNews";
import LeftNavbar from "../Components/Leyout-Components/LeftNavbar";
import RightNavbar from "../Components/Leyout-Components/RightNavbar";
import Navbar from "../Components/Navbar/Navbar";

const HomeLeyout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>

            </header>
            <nav className="w-11/12 mx-auto pt-3">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12">
                <aside className="Left col-span-3"><LeftNavbar></LeftNavbar></aside>
                <section className="Main col-span-6 "><Outlet></Outlet></section>
                <aside className="Right col-span-3"><RightNavbar></RightNavbar></aside>
            </main>
        </div>
    );
};

export default HomeLeyout;