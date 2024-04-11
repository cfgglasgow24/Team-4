import React from "react";
import { Link } from "react-router-dom";

const Quiz1 = () => {
    return (    
        <div className="home-container min-h-screen bg-black">
            <div className="header-container">
                <br />
                <h1 className="text-white text-5xl text-center">Quiz 1</h1>
            </div>
            <br />
            <div className="image-container flex justify-center items-center">
                <div className="p-4 bg-gray-500 w-full max-w-4xl h-96">
                    {/* image is to go inside */}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8 w-5/6 sm:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto mt-8">
                <button className="bg-red-500 rounded shadow-lg text-3xl font-bold py-8">A</button>
                <button className="bg-blue-500 rounded shadow-lg text-3xl font-bold py-8">B</button>
                <button className="bg-purple-500 rounded shadow-lg text-3xl font-bold py-8">C</button>
                <button className="bg-indigo-500 rounded shadow-lg text-3xl font-bold py-8">D</button>
            </div>
        </div>
    );
};

export default Quiz1;
