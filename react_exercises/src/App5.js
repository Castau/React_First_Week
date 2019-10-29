import React, { useState, useEffect } from "react";

export default function App() {

    const [time, setTime] = useState(Time());
    const [runClock, setRunClock] = useState(false);
    const [timeText, setTimeText] = useState('Start');

    useEffect(() => {
        if (runClock === false) {
            setTimeText('Start');
            return
        }
        setTimeText('Stop');
        const tick = setInterval(() => {
            setTime(Time());
        }, 1000)

        return () => {
            clearInterval(tick)
        }
    }, [runClock])

    return (
        <div>
            <p>Clock: {time}</p>
            <button onClick={() => setRunClock(!runClock)}> {timeText} Time</button>
        </div>
    )
}

function Time() {
    let dateTime = new Date();
    let time = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();
    return time;

}