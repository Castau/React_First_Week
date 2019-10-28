import React from 'react';
import './App.css';
import upper, { text1, text2, text3 } from "./file1";

function App() {
    return (
        // 1 Understanding ES6 Modules – import and export, b
        <div className="App">
            <p>{upper("please uppercase me")}</p>
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
        </div>
    );
}

export default App;
