import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AllPersonsList from "./AllPersonsList"
import NewPerson from "./NewPerson"
import uuid from "uuid/v1";


// Lifting State Up 2 a-d
function App() {
    const initialData = [
        { id: uuid(), fullName: "Arthas Menethil" },
        { id: uuid(), fullName: "Bolvar Fordragon" },
        { id: uuid(), fullName: "Archmage Khadgar" }
    ]
    const [persons, setPersons] = useState(initialData);
    const [newPerson, setNewPerson] = useState({ id: "", fullName: "" });
    console.log(persons)

    const addPerson = person => {
        if (person.id === "") {
            person.id = uuid();
            persons.push(person);
        } else {
            let personEdit = persons.find(t => t.id === person.id);
            personEdit.fullName = person.fullName;
        }
        setPersons([...persons]);
        setNewPerson({ id: "", fullName: "" })
    };

    const deletePerson = (id) => {
        const newList = persons.filter(person => person.id !== id);
        setPersons([...newList]);
    }

    const editPerson = (id) => {
        const toEdit = persons.find(person => person.id === id);
        setNewPerson({ ...toEdit })
    }

    return (
        <div className="container outer">
            <h2 style={{ textAlign: "center", marginBottom: 25 }}> Props and Lifting State Demo </h2>
            <div className="row">
                <div className="col-6 allPersons">
                    <AllPersonsList persons={persons} deletePerson={deletePerson} editPerson={editPerson} />
                </div>
                <div className="col-5 new-person">
                    <NewPerson addPerson={addPerson} nextPerson={newPerson} />
                </div>
            </div>
        </div>
    );
}
export default App;