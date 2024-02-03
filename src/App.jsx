import React, { useState } from "react";
import "./styles.css";

export default function App() {
    const [inputContainer, setInputContainer] = useState("");
    const handleButtonClick = (value) => {
        setInputContainer((prevInputContainer) => prevInputContainer + value);
    };

    const resetButton = () => {
        setInputContainer("");
    };

    const answerButton = () => {
        try {
            setInputContainer(eval(inputContainer).toString());
        } catch (error) {
            setInputContainer("Error");
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 bg-opacity-80">
            <div className="bg-gray-900 bg-opacity-30 p-8 rounded-md shadow-lg font-bold">
                <h1 className="text-4xl text-center text-white mb-6">CALCULATOR</h1>
                <div className="relative mb-4">
                    <input
                        type="text"
                        readOnly={true}
                        value={inputContainer}
                        className="w-full bg-gray-800 text-white p-2 rounded-md focus:outline-none"
                    />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <button
                        onClick={() => handleButtonClick("0")}
                        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        0
                    </button>
                    <button
                        onClick={() => handleButtonClick("1")}
                        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        1
                    </button>
                    <button
                        onClick={() => handleButtonClick("2")}
                        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        2
                    </button>
                    <button
                        onClick={() => handleButtonClick("3")}
                        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        3
                    </button>
                    <button
                        onClick={() => handleButtonClick("4")}
                        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        4
                    </button>
                    <button
                        onClick={() => handleButtonClick("5")}
                        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        5
                    </button>
                    <button
                        onClick={() => handleButtonClick("6")}
                        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        6
                    </button>
                    <button
                        onClick={() => handleButtonClick("7")}
                        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        7
                    </button>
                    <button
                        onClick={() => handleButtonClick("8")}
                        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        8
                    </button>
                    <button
                        onClick={() => handleButtonClick("9")}
                        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        9
                    </button>
                    <button
                        onClick={() => handleButtonClick("*")}
                        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        *
                    </button>
                    <button
                        onClick={() => handleButtonClick("/")}
                        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        /
                    </button>
                    <button
                        onClick={() => handleButtonClick("+")}
                        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        +
                    </button>
                    <button
                        onClick={() => handleButtonClick("-")}
                        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        -
                    </button>
                    <button
                        onClick={answerButton}
                        className="p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 col-span-2"
                    >
                        =
                    </button>
                    <button
                        onClick={resetButton}
                        className="p-4 bg-red-500 text-white rounded-md hover:bg-red-600 col-span-4"
                    >
                        CLEAR
                    </button>
                </div>
            </div>
        </div>
    );
}
