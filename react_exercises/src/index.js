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
import App8 from "./ListDemoApp2";
import App9 from "./FormDemo";
import App10 from "./FormDemoMultiple";

let app = <App />

const DontUseMeForReal = () => {
    return (
        <div className="App">
            <div onClick={handleSelect}>
                <a href="/" className="x" id="app1">Monday 1</a> &nbsp;
                <a href="/" className="x" id="app2">Monday 2</a> &nbsp;
                {/* 3 Composing Components, Props-1, c */}
                <a href="/" className="x" id="app3">Monday 3</a> &nbsp;
                <a href="/" className="x" id="app4">Tuesday State and Events 1</a> &nbsp;
                <a href="/" className="x" id="app5">Tuesday State and Events 2</a> &nbsp;
                <a href="/" className="x" id="app6">Tuesday State and Events 3</a> &nbsp;
                <a href="/" className="x" id="app7">Tuesday List and Keys 1</a> &nbsp;
                <a href="/" className="x" id="app8">Tuesday List and Keys 2</a> &nbsp;
                <a href="/" className="x" id="app9">Forms and Controlled Components 1</a> &nbsp;
                <a href="/" className="x" id="app10">Forms and Controlled Components 2</a> &nbsp;
            </div>
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
        case "app8": app = <App8 />; break;
        case "app9": app = <App9 />; break;
        case "app10": app = <App10 />; break;
        default: app = <App />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));


