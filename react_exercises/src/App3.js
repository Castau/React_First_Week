
// 3 Composing Components, Props-1, a
import React from 'react';
import PropTypes from "prop-types";
import { names } from "./file2";


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

            {/* 3 Composing Components, Props-2, c */}
            <WelcomePerson person={names[0]} />
            <WelcomePerson person={names[1]} />
            <WelcomePerson person={names[2]} />

            {/* This prop gives a runtime error due to the Type check */}
            <Welcome name={45} />
        </div>
    );
}

// 3 Composing Components, Props-1, d
Welcome.propTypes = {
    name: PropTypes.string
};

// 3 Composing Components, Props-2, b
export function WelcomePerson(props) {
    const person = props.person;
    const { firstName, lastName, email } = person;

    return (
        <div>
            <p>First Name: {firstName}, Last Name: {lastName}, Email: {email}</p>
        </div>
    );
}

// 3 Composing Components, Props-2, d
WelcomePerson.propTypes = {
    person: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    })
};

