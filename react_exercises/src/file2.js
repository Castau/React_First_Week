
// 2 Object and Array Destructuring, 1
export default {
    firstName: "Arthas",
    lastName: "Menethil",
    gender: "Male",
    email: "lich@king.dk"
}

// 2 Object and Array Destructuring, 5
export const males = ["Varian", "Bolvar"];
export const females = ["Jaina", "Sylvanas"];


// 3 Composing Components, Props-2, a
export const names = [
    { firstName: "Arthas", lastName: "Menethil", gender: "Male", email: "lich@king.dk", phone: "12345" },
    { firstName: "Jaina", lastName: "Proudmore", gender: "female", email: "daughter@ofthesea.dk", phone: "54321" },
    { firstName: "Sylvanas", lastName: "Windrunner", gender: "Female", email: "lich@queen2be.dk", phone: "12345" }
];
// These persons give an error due to the type check if they are pasted in instead of to of the other persons
    // { firstName: "Jane", email: "j@wonnegut.dk", phone: "12345" },
    // { firstName: "Jane" },