import { useContext } from "react";
import { AiFillPhone, AiTwotoneMail, } from "react-icons/ai";
import { FaLocationPin } from "react-icons/fa6";
import { AuthContext } from "../../Context/AuthProvider";
import TopSection from "../TopSection/TopSection";

const LocationFind = () => {
    const { darkMode } = useContext(AuthContext);
    return (
        <div>

            <div className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
                    <div className="px-8">
                        <div>
                            <TopSection headline={"Find us on here..."}></TopSection>
                        </div>
                        <div className="flex items-center my-4">
                            <FaLocationPin className={` text-3xl mr-2 ${darkMode ? "text-white" : "text-pink-600"}`}  ></FaLocationPin>
                            <div>
                                <p className={` font-semibold  text-lg ${darkMode ? "text-white" : "text-blue-800"}`} >  Location: </p>
                                <p className={`${darkMode ? "text-white" : "text-pink-600"}`}>Haybatnagar, Kishoreganj sadar, Kihsoreganj</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex items-center my-4">
                            <AiFillPhone className={` text-3xl mr-2 ${darkMode ? "text-white" : "text-pink-600"}`} ></AiFillPhone>
                            <div>
                                <p className={` font-semibold  text-lg ${darkMode ? "text-white" : "text-blue-800"}`} >  Call Us: </p>
                                <p className={`${darkMode ? "text-white" : "text-pink-600"}`}>017123456789,0123456789</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex items-center my-4">
                            <AiTwotoneMail className={` text-3xl mr-2 ${darkMode ? "text-white" : "text-pink-600"}`} ></AiTwotoneMail>
                            <div>
                                <p className={` font-semibold  text-lg ${darkMode ? "text-white" : "text-blue-800"}`} > Mail Us: </p>
                                <p className={`${darkMode ? "text-white" : "text-pink-600"}`}>info@management.com</p>
                            </div>
                        </div>
                        <hr />

                    </div>
                    <div>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d556.1837935362722!2d90.61450794914464!3d24.46990540593512!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1696014600960!5m2!1sen!2sbd" width="100%" height="450" style={{ "border": 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LocationFind;