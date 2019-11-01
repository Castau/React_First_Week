import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';


// Lifting State Up 2 a-d
function NewPerson(props) {

    const [person, setPerson] = useState(props.nextPerson);

    const savePerson = evt => {
        if (person.fullName === "") {
            return;
        }
        props.addPerson(person);
        evt.preventDefault();
    };

    useEffect(() => setPerson({ ...props.nextPerson }), [props.nextPerson]);

    const onChange = evt => {
        const val = evt.target.value;
        person.fullName = val;
        setPerson({ ...person });
    };
    const title = person.id === "" ? "Create new Person" : "Edit Person"
    return (
        <div>
            <h4>{title}</h4>
            <form>
                <input value={person.fullName} onChange={onChange} />
                <br /><br />
                <button onClick={savePerson} className="btn btn-info">Save</button>
            </form>
            {person.id !== "" && <p>Editing person</p>}
        </div>
    );
}
export default NewPerson;

NewPerson.propTypes = {
    nextPerson: PropTypes.object,
    addPerson: PropTypes.func
}