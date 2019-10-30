import React, { useState, useEffect } from "react";

// State and Events with React 3 a-c
export default function App() {
    const [norrisJoke, setNorrisJoke] = useState('');
    const [dadJoke, setDadJoke] = useState('');
    const [getNorrisId, setGetNorrisId] = useState(false);

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(res => res.json())
            .then(data => {
                setNorrisJoke(data.value)
            })

    }, [getNorrisId]);

    useEffect(() => {
        const clear = setInterval(() => {
            fetch("https://icanhazdadjoke.com", {
                headers: {
                    Accept: 'text/plain'
                }
            })
                .then(res => res.text())
                .then(data => {
                    setDadJoke(data)
                })
        }, 10000)
        return () => clearInterval(clear)
    }, []);

    return (
        <div>
            <p>Chuck Norris Joke:</p>
            <p>{norrisJoke}</p>
            <p>Dad Joke</p>
            <p>{dadJoke}</p>
            <button onClick={() => setGetNorrisId(!getNorrisId)}>New Chuck Norris Joke</button>
        </div>
    );
}

