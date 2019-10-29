import React, { useState, useEffect } from 'react';


// State and Events with React 1 a-d
export default function App(props) {

    const { initialValue, increment } = props;
    const [count, setCount] = useState(
        Number(localStorage.getItem("count") || initialValue)
    );

    useEffect(() => {
        localStorage.setItem("count", count);
    });

    return (
        <div>
            <p>initialValue: {initialValue}</p>
            <p>increment: {increment}</p>
            <p>Count clicked {count} times</p>
            <button onClick={() => setCount(count + increment)}>Count</button>
            <button onClick={() => setCount(count - increment)}>Count backwards</button>
            <button onClick={() => localStorage.removeItem('count')}>Clear local storage</button>
        </div>
    )
}

