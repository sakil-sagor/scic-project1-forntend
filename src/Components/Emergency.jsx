import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

// Emergency page for home  

const Emergency = () => {
    const { darkMode } = useContext(AuthContext);
    return (
        <div>
            <div className={`grid sm:grid-cols-2 md:grid-cols-4 ${darkMode ? "text-gray-700" : "text-white"}`}>
                <div className="bg-green-600 py-16  text-center flex justify-center	items-center " >
                    <div className="hover:text-gray-800 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110	">
                        <i class="fas fa-phone mr-2 text-4xl"></i>
                        <p className="text-xl font-semibold	"> 24 Hours Services</p>
                    </div>
                </div>
                <div className="bg-pink-600 py-16 text-center flex justify-center	items-center" >
                    <div className="hover:text-gray-800 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110	">
                        <i class="far fa-calendar-check mr-2 text-4xl"></i>
                        <p className="text-xl font-semibold	hover:text-gray-800">100+ Category</p>
                    </div>
                </div>
                <div className="bg-blue-600 py-16 text-center flex justify-center	items-center" >
                    <div className="hover:text-gray-800 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110	">
                        <i class="fas fa-people-carry mr-2 text-4xl"></i>
                        <p className="text-xl font-semibold	hover:text-gray-800">Fast Delivery</p>
                    </div>
                </div>
                <div className="bg-red-600 py-16 text-center flex justify-center	items-center" >
                    <div className="hover:text-gray-800 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110	">
                        <i class="fab fa-amazon-pay  mr-2 text-4xl"></i>
                        <p className="text-xl font-semibold	hover:text-gray-800"> Online Payment</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emergency;

