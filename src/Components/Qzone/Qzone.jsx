import swimming from "../../assets/swimming.png"
import student from '../../assets/class.png'
import playGroud from '../../assets/playground.png'
import bg from '../../assets/bg.png'
const Qzone = () => {
    return (
        <div className=" mt-10 rounded-xl">
            <div className="flex bg-gray-100 flex-col justify-center">
                <h1 className="items-center flex justify-center pt-4 font-bold text-2xl">Q-Zone</h1>
                <img src={swimming} alt="" />
                <img src={student} alt="" />
                <img src={playGroud} alt="" />
            </div>

            <div className="flex flex-col pt-5">
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;