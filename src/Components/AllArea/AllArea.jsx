import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import './AllArea.css';

// home page section 

const AllArea = () => {
    const { darkMode } = useContext(AuthContext);
    return (
        <div className={`lg:py-24 ${darkMode ? " text-white bg-black all-esist-area" : "text-gray-700 all-area"}   `}>
            <div className="container m-auto full-width-all py-24  shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2  justify-items-center items-center px-2 ">

                    <div className="py-4">
                        <h1 className=" text-4xl font-semibold">Enjoy Your All Day with Us</h1>
                        <h1 className=" text-6xl font-semibold py-8">Goods of Life</h1>
                        <p className=" text-lg font-semibold mt-8">
                            Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for Life.
                        </p>
                    </div>
                    <div className={`py-4  text-white   `}>
                        <div className="w-full ">
                            <div className="  w-full block bg-pink-500 py-4 px-5 rounded-lg duration-500 text-xl font-semibold hover:bg-pink-700" > Shop Now<i class="fas fa-arrow-right ml-2"></i></div>
                        </div>
                        <br />
                        <div className="w-full">
                            <div className=" w-full block bg-pink-500 py-4 px-5 rounded-lg  duration-500 text-xl font-semibold hover:bg-pink-700" > Find Best Sell <i class="fas fa-arrow-right ml-2"></i></div>
                        </div>
                        <br />
                        <div>
                            <div className=" bg-pink-500 w-full block py-4 px-5 rounded-lg  duration-500 text-xl font-semibold hover:bg-pink-700" > Discount Status <i class="fas fa-arrow-right ml-2"></i></div>
                        </div>
                        <br />
                        <div>
                            <div className=" bg-pink-500 py-4 px-5 w-full block rounded-lg duration-500  text-xl font-semibold hover:bg-pink-700" >Emergency Contact <i class="fas fa-arrow-right ml-2"></i></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllArea;