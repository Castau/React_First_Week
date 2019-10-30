import React, { useState, useEffect } from "react";

export default function Jokes() {
    const [norrisJoke, setNorrisJoke] = useState("");
    const [dadJoke, setDadJoke] = useState("");
    const [getNorrisId, setGetNorrisId] = useState("");

    useEffect(() => {
        fetch("norris api")
            .then(res => res.json())
            .then(data => {
                setNorrisJoke(data.Value)


            }), [getNorrisId])

    useEffect(() => {
        const clear = setInterval(() => {
            fetch("dad api"), {
                headers: {
                    Accept: 'text/plain'
                }
            })
            .then(res => res.json())
            .then(data => {
                setDadJoke(data)
            })
    }, 10000)
    return () => clearInterval(clear)
}, [])
}

