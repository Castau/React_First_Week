import React, { useState, useEffect } from "react";

// List and Keys, 1 a-g
function ListDemo(props) {
    return (
        <div>
            <p>Unordered list of numbers</p>
            <NumberList numbers={props.numbers} />
            <p>Table of numbers</p>
            <NumberTable numbers={props.numbers} />
        </div>
    );
}

function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList({ numbers }) {
    const listItems = numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />
    );
    return <ul>{listItems}</ul>;
}

function Row(props) {
    return <tr><td>{props.number}</td></tr>;
}

function NumberTable({ numbers }) {
    const tableItems = numbers.map(number => (
        <Row key={number.toString()} number={number} />
    ));
    return <div><table><tbody>{tableItems}</tbody></table></div>;
}

export default function App7() {
    const [numbers, setNumbers] = useState([]);
    useEffect(() => {
        const clean = setInterval(() => {
            setNumbers([...numbers, numbers.length + 1]);
        }, 5000);

        return () => {
            clearInterval(clean);
        };
    });
    return <div><ListDemo numbers={numbers} /></div>;
}