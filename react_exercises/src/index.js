import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App7 from "./ListDemoApp";

let app = <App />

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
            <a href="/" className="x" id="app1">Monday Exercise 1</a> &nbsp;
            <a href="/" className="x" id="app2">Monday Exercise 2</a> &nbsp;
            {/* 3 Composing Components, Props-1, c */}
            <a href="/" className="x" id="app3">Monday Exercise 3</a> &nbsp;
            <a href="/" className="x" id="app4">Tuesday Exercise 1</a> &nbsp;
            <a href="/" className="x" id="app5">Tuesday Exercise 2</a> &nbsp;
            <a href="/" className="x" id="app6">Tuesday Exercise 3</a> &nbsp;
            <a href="/" className="x" id="app7">Tuesday Exercise 4</a> &nbsp;
         {/* Add as many as you have exercises, but remember className="x" */}
            {app}
        </div>
    );
}

function handleSelect(event) {
    event.preventDefault();
    if (event.target.className !== "x") {
        return
    }
    const id = event.target.id;
    switch (id) {
        case "app1": app = <App />; break;
        case "app2": app = <App2 />; break;
        case "app3": app = <App3 />; break;
        case "app4": app = <App4 initialValue={5} increment={1} />; break;
        case "app5": app = <App5 />; break;
        case "app6": app = <App6 />; break;
        case "app7": app = <App7 />; break;
        default: app = <App />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));


