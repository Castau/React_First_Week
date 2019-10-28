import React from 'react';
import Person from "./file2";
import { males } from "./file2";
import { females } from "./file2";

// 2 Object and Array Destructuring, 2 & 3
const { firstName, email } = Person;

export default function App2() {
    return (
        // 2 Object and Array Destructuring, 4
        <div className="App">
            <p>First name: {firstName}, E-mail: {email}</p>
        </div>
    );
}

// 2 Object and Array Destructuring, 6
console.log([...males, ...females]);
console.log([...males, firstName, "Tyrande", ...females, "Onyxia"]);

// 2 Object and Array Destructuring, 7
const personV2 = {
    email,
    firstName,
    friends: [...males, ...females],
    gender: Person.gender,
    lastName: Person.lastName,
    phone: 123456
};

console.log(personV2);