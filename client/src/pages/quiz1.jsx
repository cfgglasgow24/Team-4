import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Quiz1 = () => {
    const urls = [
        "https://firebasestorage.googleapis.com/v0/b/team-4-jpmc.appspot.com/o/a%401.jpeg?alt=media&token=",
        "https://firebasestorage.googleapis.com/v0/b/team-4-jpmc.appspot.com/o/b%402.jpeg?alt=media&token=",
        "https://firebasestorage.googleapis.com/v0/b/team-4-jpmc.appspot.com/o/c%403.jpeg?alt=media&token=",
        "https://firebasestorage.googleapis.com/v0/b/team-4-jpmc.appspot.com/o/d%404.jpeg?alt=media&token=",
        "https://firebasestorage.googleapis.com/v0/b/team-4-jpmc.appspot.com/o/e%405.jpeg?alt=media&token="
    ];

    const [randomIndex, setRandomIndex] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showCorrect, setShowCorrect] = useState(false);

    useEffect(() => {
        const index = Math.floor(Math.random() * 5);
        setRandomIndex(index);
    }, []);

    const handleOptionSelect = (option) => {
        if (option === String.fromCharCode(97 + randomIndex).toUpperCase()) {
            setIsCorrect(true);
            setSelectedOption(null);
            setShowCorrect(true);
            setTimeout(() => {
                setIsCorrect(false);
                setShowCorrect(false);
                const index = Math.floor(Math.random() * 5);
                setRandomIndex(index);
            }, 2000); 
        } else {
            setSelectedOption(option);
        }
    };

    return (    
        <div className="home-container min-h-screen bg-black">
            <div className="header-container">
                <br />
                <button className="p-3 bg-red-500">
                    <Link to="/" className="text-white text-lg ">Back</Link>
                </button>
                <h1 className="text-white text-5xl text-center">Choice Quest</h1>
            </div>
            <br />
            <div className="image-container flex justify-center items-center">
                <div className="p-4 bg-gray-500 w-full max-w-4xl h-96 flex items-center justify-center">
                    <img src={urls[randomIndex]} alt="Gesture" className="max-w-full max-h-full" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8 w-5/6 sm:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto mt-8">
                {['A', 'B', 'C', 'D', 'E'].map((option, index) => (
                    <button 
                        key={index} 
                        className={isCorrect && option === String.fromCharCode(97 + randomIndex).toUpperCase() ? "bg-green-500 rounded shadow-lg text-3xl font-bold py-8" : selectedOption === option ? "bg-red-500 rounded shadow-lg text-3xl font-bold py-8" : "bg-gray-500 rounded shadow-lg text-3xl font-bold py-8"}
                        onClick={() => handleOptionSelect(option)}
                        disabled={showCorrect}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Quiz1;
