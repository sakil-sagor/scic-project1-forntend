import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const SingleBrands = ({ brand }) => {
    const { brandName, image, _id } = brand;
    const { darkMode } = useContext(AuthContext);
    return (
        <Link to={`brand/${_id}`}>
            <div className={`flex flex-col iteam-center justify-center items-center border h-40 md:h-64 font-semibold rounded ${darkMode ? "shadow-blue-50 text-blue-800 shadow-none bg-gray-400" : "shadow-blue-200 shadow-xl "}`}>
                <div className="w-full h-5/6 flex-grow">
                    <img className="w-full h-full md:w-2/3 mx-auto" src={image} alt="" />
                </div>
                <div className="py-3">
                    <h3 className="">{brandName}</h3>
                </div>
            </div>
        </Link>
    );
};

export default SingleBrands;