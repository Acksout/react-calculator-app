import React from "react";
import {useRef, useState} from "react";

export default function App() {
    const inputRef = useRef(null)
    const handleButtonClick =
        (value) => {
            if (inputRef.current) {
                inputRef.current.value += value
            }
        }
    return (<div>
        <h1>Calc</h1>
        <input readOnly={false} ref={inputRef}/>
        <div>
            <button onClick={() => handleButtonClick("0")}>0</button>
            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button onClick={() => handleButtonClick("7")}>7</button>
            <button onClick={() => handleButtonClick("8")}>8</button>
            <button onClick={() => handleButtonClick("9")}>9</button>
            <button onClick={() => handleButtonClick("*")}>*</button>
            <button onClick={() => handleButtonClick("/")}>/</button>
            <button onClick={() => handleButtonClick("+")}>+</button>
            <button onClick={() => handleButtonClick("-")}>-</button>
            {/*This btn should give output*/}
            {/*<button onClick={() => handleButtonClick("=")}>=</button>*/}
        </div>
    </div>)
}