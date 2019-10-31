import React, { useState } from "react";

// Forms and Controlled Components 1 a-d
const NameForm = () => {
    const initialState = { name: '', job: '' };
    const [person, setPerson] = useState(initialState);

    const handleChange = (event) => {
        const target = event.target;
        const id = target.id;
        const value = target.value;
        // person[id] = value;
        setPerson({ ...person, [id]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        window.alert(JSON.stringify(person));
        setPerson(initialState);
    };
    return (
        <div>
            <form onChange={handleChange}>
                <input id="name" type="text" placeholder="Name" value={person.name} />
                <br></br>
                <input id="job" type="text" placeholder="Job" value={person.job} />
                <br></br>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <p>{JSON.stringify(person)}</p>
        </div>
    );
};

export default function FormDemo() {
    return <div style={{ marginTop: 25 }}><NameForm /></div>;

}
