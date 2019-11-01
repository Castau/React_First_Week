import React from 'react';
import PropTypes from 'prop-types';

// Lifting State Up 2 a-d
const PersonList = ({ persons, deletePerson, editPerson }) => {
    return (
        <React.Fragment>
            <h4>All Persons</h4>
            <table className="table">
                <thead><tr>
                    <th>Full Name</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr></thead>
                <tbody>
                    {persons.map(person => (
                        <tr key={person.id}>
                            <td>{person.fullName}</td>
                            <td><a href="/#" onClick={(e) => { e.preventDefault(); deletePerson(person.id) }}> delete </a></td>
                            <td><a href="/#" onClick={(e) => { e.preventDefault(); editPerson(person.id) }}> edit </a></td>
                        </tr>
                    ))}
                </tbody></table>
        </React.Fragment>
    );
};
export default PersonList;

PersonList.propTypes = {
    persons: PropTypes.array
}