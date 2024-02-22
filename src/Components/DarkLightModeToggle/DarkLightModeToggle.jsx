import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const DarkLightModeToggle = () => {
    const { darkMode, toggleDarkMode } = useContext(AuthContext);

    return (
        <div className={`${darkMode ? "bg-white text-black" : "bg-gray-700 text-white"} border border-blue-900 rounded-full inline-block px-3  shadow-xl`}>


            {
                darkMode ?
                    <button onClick={toggleDarkMode} className="p-2 ">
                        Light
                    </button>
                    :
                    <button onClick={toggleDarkMode} className="p-2 ">
                        Dark
                    </button>

            }
        </div>
    );
};

export default DarkLightModeToggle;