
// 3 Composing Components, Props-1, a
import React from 'react';
import PropTypes from "prop-types";


// 3 Composing Components, Props-1, b
export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

export default function App() {
    return (
        <div>
            <Welcome name="Rigmor" />
            <Welcome name="Atramedes" />
            <Welcome name="Deathwing" />
            <Welcome name={45} />
        </div>
    );
}

// 3 Composing Components, Props-1, d
Welcome.propTypes = {
    name: PropTypes.string
};
