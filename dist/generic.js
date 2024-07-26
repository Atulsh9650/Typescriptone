"use strict";
//Generics
const userss = [
    {
        name: "atul",
        age: 22
    },
    {
        name: "abhi",
        age: 22
    }, {
        name: "atul",
        age: 25
    }, {
        name: "sumit",
        age: 22
    },
];
const filterbykey = (arr, property, value) => {
    return arr.filter((item) => item[property] === value);
};
const filterednames = filterbykey(userss, "name", "atul");
const filteredage = filterbykey(userss, "age", 22);
console.log(filterednames);
console.log(filteredage);
